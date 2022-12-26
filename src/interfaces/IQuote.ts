export interface IQuoteComponent {
    ciaId: string;
    quantity: number;
    types: ['ciaId', 'quantity']
}

export interface IQuote {
    name?: string;
    paymentDeadline: number;
    cpm: number;
    totalPrice: number;
}

export interface IQuoteResult {
    maxmilhas: IQuote[],
    hotmilhas: IQuote[],
    quantity: number
}