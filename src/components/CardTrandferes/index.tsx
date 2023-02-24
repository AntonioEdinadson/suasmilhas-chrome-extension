import { useEffect, useState } from "react";
import { MomentDiffDate } from "../../Config/date-diff";
import { IProgram, IPromotion } from "../../interfaces/IPromotions";

export const CardTransferes = (props: IPromotion) => {

    const rtf = new Intl.RelativeTimeFormat();
    const [term, setTerm] = useState<number>(0);

    useEffect(() => {
        setTerm(MomentDiffDate(new Date(Date.now()), new Date(props.end_date)));
    }, []);

    return (
        <section className={`border rounded px-3 mb-4 bg-zinc-50 ${!props.status && "filter grayscale"}`}>

            <div className="flex justify-between items-center border-b py-2">
                <div className="w-[4rem]">
                    <img src={props.cia.image} alt={props.cia.image} />
                </div>
                <div className="flex items-center gap-1 text-[.9rem] font-light">
                    <p>Ganhe até</p>
                    <p className="font-semibold text-[1.2rem]">{props.bonus}</p>
                    <p className="text-[.8rem]">Bônus</p>
                </div>
            </div>

            <div className="flex gap-2 items-center justify-around py-2">
                <p className="text-[.8rem] text-zinc-500 border-r pr-2 font-light">
                    Participantes
                </p>
                <div className="flex items-center gap-1">
                    {props.programs.map((program: IProgram, index) => (
                        <div key={index} className="w-[3rem] h-[2rem] rounded border p-1 flex justify-center items-center">
                            <img src={program.image} alt={program.image} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center border-t py-2 flex justify-between items-center">
                <p className="text-zinc-800">{term < 0 ? "Encerrou" : "Encerra"} {rtf.format(parseInt(term.toFixed(0)), 'days')}</p>

                <p className={`text-[.8rem] px-4 py-1 bg-[#17E077] text-white rounded ${props.status && "cursor-pointer hover:scale-105"}`}
                    onClick={() => props.status && chrome.tabs.create({ url: props.link })}>
                    Participar
                </p>
            </div>

        </section>
    );
};