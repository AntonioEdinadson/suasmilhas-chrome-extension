export interface IProgram {
    id: string;
    image: string;
    type: string;
}

export interface IPromotion {
    id: string;    
    bonus: string;
    link: string;
    cia: IProgram;
    programs: IProgram[]
    start_date: Date;
    end_date: Date;
    status: boolean;
}