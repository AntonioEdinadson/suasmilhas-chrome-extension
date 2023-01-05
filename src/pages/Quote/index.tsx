import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navbar } from "../../components/Navbar";
import { QuoteResult } from "../../components/QuoteResult";
import { SelectField } from "../../components/SelectField";
import { TopBar } from "../../components/TopBar";
import { suasmilhas } from "../../Hooks/useQuote";
import { ICia } from "../../interfaces/ICia";
import { IQuote, IQuoteComponent, IQuoteResult } from "../../interfaces/IQuote";
import { ISelect } from "../../interfaces/ISelect";

import maxIcon from '../../assets/max.png';
import hotIcon from '../../assets/hot.webp';
import { MyApps } from "../../components/MyApps";
import AuthContext from "../../Contexts/AuthContext";

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
            const request = await suasmilhas.getCias();
            setCias(request);

            const resquestProgram = request.map((cia: any) => {
                return {
                    label: cia.category ? `LATAM PASS ${cia.category.toUpperCase()}` : cia.name,
                    value: cia.id
                }
            });

            setProgram(resquestProgram);

        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async (e: any) => {
        try {                                    

            if (!e.ciaId || !e.quantity) {
                console.log("ciaID error");                
                return;
            }

            const request = await suasmilhas.getQuote(e.ciaId, e.quantity);
            setResult(request);

        } catch (error) {
            console.log(error);            
        }
    };

    return (
        <div className="relative">
            <div className="w-full absolute top-0 left-0 h-full">
                <div className="flex items-center h-[6rem] px-3 border-b">
                    <TopBar name={"ANTONIO"} />
                </div>
                <main className="w-full flex justify-center items-center h-[26rem] p-[1.5rem]">
                    {result
                        ?
                        <div className="w-full h-full flex flex-col gap-2">
                            <div className="flex items-center justify-between mb-4 text-[#868686]">
                                <h1 className="text-[1rem]">Sua contação para <span className="font-medium">{result.quantity}.000 milhas</span></h1>
                                <span className="border px-2 rounded flex justify-between items-center cursor-pointer text-[.8rem]" onClick={() => { setResult(null), setPoint(null) }}>VOLTAR</span>
                            </div>
                            <div className="overflow-y-auto">
                                <div>
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