export interface IBenefit {
    status: boolean;
    name: string;
}

export interface ISubscribedPlan {
    signatureID: string;
    planID: string;
    planName: string;
    daysRemaining: number;
    created_at: string;
}

export interface IPlan {
    id: string;
    code?: string;
    name: string;
    description: string;
    price: number,
    month?: number
    livelo?: number,
    smiles?: number,
    benefits: IBenefit[],    
    highlight?: boolean
}