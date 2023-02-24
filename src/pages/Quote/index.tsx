import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import QuoteApi from "../../Hooks/useQuote";
import AuthContext from "../../Contexts/AuthContext";

import { Navbar } from "../../components/Navbar";
import { QuoteResult } from "../../components/QuoteResult";
import { SelectField } from "../../components/SelectField";
import { TopBar } from "../../components/TopBar";
import { MyApps } from "../../components/MyApps";

import { ICia } from "../../interfaces/ICia";
import { IQuote, IQuoteComponent, IQuoteResult } from "../../interfaces/IQuote";
import { ISelect } from "../../interfaces/ISelect";

import maxIcon from '../../assets/max.png';
import hotIcon from '../../assets/hot.webp';
import { Alert } from "../../components/Alert";

export const Quote = () => {

    const auth = useContext(AuthContext);

    const { handleSubmit, control, formState: { errors } } = useForm<IQuoteComponent>();
    const [cias, setCias] = useState<ICia[]>([]);

    const [cia, setCia] = useState<ISelect | null>(null);
    const [point, setPoint] = useState<ISelect | null>(null);

    const [program, setProgram] = useState<ISelect[]>([]);
    const [quantity, setQuantity] = useState<ISelect[]>([]);
    const [statusQuantity, setStatusQuantity] = useState<Boolean>(true);

    const [result, setResult] = useState<IQuoteResult | null>(null);

    useEffect(() => {
        getCias();
    }, []);

    useEffect(() => {

        try {

            setStatusQuantity(true);
            setQuantity([]);
            setPoint(null);

            if (!cia?.value) {
                console.log("NOT ID CIA");
                return;
            }

            const data = cias
                .filter((element: ICia) => element.id == cia.value)
                .map((cia: ICia) => {
                    const newPoints: any[] = [];
                    for (let index = cia.points[0]; index <= cia.points[1]; index++) {
                        newPoints.push({
                            label: `${index} MIL MILHAS`,
                            value: index
                        });
                    }
                    return newPoints;
                });

            setStatusQuantity(false);
            setQuantity(data[0]);

        } catch (error) {
            console.log(error);
        }
    }, [cia]);

    const getCias = async () => {
        try {

            if (!auth.user?.token || !auth.user.id) {
                setCias([]);
                auth.handleLoading(false);
                console.log("unauthorized");
                return;
            }

            auth.handleLoading(true);

            const request = await QuoteApi.getCias({
                token: auth.user?.token,
                userId: auth.user?.id
            });

            setCias(request);

            const resquestProgram = request.map((cia: any) => {
                return {
                    label: cia.category ? `LATAM PASS ${cia.category.toUpperCase()}` : cia.name,
                    value: cia.id
                }
            });

            setProgram(resquestProgram);
            auth.handleLoading(false);

        } catch (error) {
            console.log(error);
            auth.handleLoading(false);
        }
    };

    const onSubmit = async (e: any) => {
        try {

            auth.handleLoading(true);

            if (!e.ciaId || !e.quantity) {
                console.log("ciaID error");
                auth.handleLoading(false);
                return;
            }

            if (!auth.user?.token || !auth.user.id) {
                setCias([]);
                auth.handleLoading(false);
                console.log("unauthorized");
                return;
            }

            const request = await QuoteApi.getQuote(e.ciaId, e.quantity, {
                token: auth.user.token,
                userId: auth.user.id
            });

            setResult(request);
            auth.handleLoading(false);

        } catch (error) {
            console.log(error);
            auth.handleLoading(false);
        }
    };

    return (
        <div className="relative">
            <div className="w-full absolute top-0 left-0 h-full">
                <div className="flex items-center h-[6rem] px-3 border-b">
                    <TopBar />
                </div>
                <main className="w-full flex justify-center items-center h-[26rem] p-[1rem]">
                    {result
                        ?
                        <div className="w-full h-full flex flex-col gap-2">
                            {!auth.user?.signature && <Alert />}
                            <div className="flex items-start justify-between mb-4 text-zinc-600">
                                
                                <div className="">
                                    <span className="block text-[1rem] leading-4 font-medium uppercase">
                                        Cotação para {result.quantity}.000 milhas
                                    </span>
                                    <span className="block font-light text-[.8rem]">
                                        Programa de Fidelidade: <b>{cia?.label}</b>
                                    </span>
                                </div>

                                <span
                                    className="px-2 cursor-pointer bg-[#17E077] py-1 text-center text-white text-[.8rem] font-medium rounded hover:scale-105"
                                    onClick={() => { setResult(null), setPoint(null) }}>
                                    VOLTAR
                                </span>
                            </div>
                            <div className="overflow-y-auto">
                                <div className="mb-2">
                                    {result.maxmilhas && result.maxmilhas.length > 0
                                        ?
                                        <div className="flex flex-col gap-2">
                                            {result.maxmilhas.map((max: IQuote, index) => (
                                                <QuoteResult image={maxIcon} cpm={max.cpm} day={max.paymentDeadline} value={max.totalPrice} key={index} />
                                            ))}
                                        </div>
                                        :
                                        <div className="my-2">
                                            <QuoteResult image={maxIcon} cpm={0} day={0} value={0} />
                                        </div>
                                    }
                                </div>
                                <div>
                                    {result.hotmilhas && result.hotmilhas.length > 0
                                        ?
                                        <div className="flex flex-col gap-2">
                                            {result.hotmilhas.map((max: IQuote, index) => (
                                                <QuoteResult image={hotIcon} cpm={max.cpm} day={max.paymentDeadline} value={max.totalPrice} key={index} />
                                            ))}
                                        </div>
                                        :
                                        <div className="my-2">
                                            <QuoteResult image={maxIcon} cpm={0} day={0} value={0} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className="w-full">

                            {!auth.user?.signature && <Alert />}

                            <div className="mb-5">
                                <MyApps />
                            </div>

                            <form method="post" onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="w-full flex flex-col gap-2">
                                    <SelectField
                                        description="Selecione o Programa"
                                        data={program}
                                        control={control}
                                        errors={errors}
                                        name={"ciaId"}
                                        state={false}
                                        execute={(event: any) => setCia(event)} />

                                    <SelectField
                                        description="Quantidade de Milhas"
                                        data={quantity}
                                        control={control}
                                        errors={errors}
                                        value={point}
                                        name={"quantity"}
                                        state={statusQuantity}
                                        execute={(event: any) => setPoint(event)} />

                                    <button className="w-full bg-[#17E077] p-[.8rem] mt-2 text-white text-[1rem] font-medium rounded">
                                        COTAR AGORA
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </main>
                <div className="w-full h-[4rem] fixed bottom-0 border-t flex items-center">
                    <Navbar locale="quote" />
                </div>
            </div>
        </div>
    );
};