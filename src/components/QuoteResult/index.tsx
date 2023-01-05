interface IQuoteResultComponent {
    image: any;
    cpm: number;
    day: number;
    value: number
}

export const QuoteResult = (props: IQuoteResultComponent) => {
    return (
        <div className="w-full rounded flex items-center justify-between bg-zinc-50 py-[.4rem] px-2 border">
            {props.value
                ?
                <>
                    <div className="w-[70%] flex items-center gap-2">
                        <div className="w-[30%]">
                            <img src={props.image} alt="logo-cia" className="w-full" />
                        </div>
                        <div className="w-[40%] text-[.8rem] font-medium bg-[#17E077] rounded p-[2px] text-zinc-50">
                            <span>CPM {props.cpm.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <div className="w-[25%] text-[.8rem] font-medium">
                            <span>EM {props.day}D</span>
                        </div>
                    </div>
                    <div className="w-[30%] text-[1.1rem] font-semibold text-right">
                        <span>{props.value.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </>
                :
                <>
                    <div className="w-full flex items-center gap-2 text-right">
                        <div className="w-[20%]">
                            <img src={props.image} alt="logo-cia" className="w-full" />
                        </div>
                        <div className="w-[80%] text-[.8rem] font-medium py-1">
                            <span>Não há valores disponeiveis</span>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};