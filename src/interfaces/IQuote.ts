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