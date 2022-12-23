import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { SelectField } from "../../components/SelectField";
import { IQuoteComponent } from "../../interfaces/IQuote";
import { ISelect } from "../../interfaces/ISelect";

export const Quote = () => {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<IQuoteComponent>();

    const [cias, setCias] = useState<ISelect[]>([]);

    useEffect(() => {
        setCias([
            {
                label: "TNONIO",
                value: 4,
            },
            {
                label: "TNONIO",
                value: 4
            }
        ]);
    }, []);

    const onSubmit = (e: any) => {
        console.log({ e });
    };

    return (
        <div className="relative">
            <div className="w-full absolute top-0 left-0 h-full">
                <div className="h-[8rem]">
                    <Header />
                </div>
                <main className="w-full flex justify-center items-center h-[24rem] p-[1.5rem]">
                    <form method="post" onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="w-full flex flex-col gap-2">
                            <SelectField
                                description="Selecione o Programa"
                                cias={cias}
                                control={control}
                                errors={errors}
                                name={"ciaId"} />

                            <SelectField
                                description="Quantidade de Milhas"
                                cias={cias}
                                control={control}
                                errors={errors}
                                name={"ciaId"}
                                state={true} />

                            <button className="w-full bg-[#17E077] p-[.8rem] mt-2 text-white text-[1rem] font-medium rounded">
                                COTAR AGORA
                            </button>
                        </div>
                    </form>
                </main>
                <div className="w-full h-[4rem] fixed bottom-0 border-t flex items-center">
                    <Navbar />
                </div>
            </div>
        </div>
    );
};