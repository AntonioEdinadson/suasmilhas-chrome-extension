import suasmilhas_api from "../Config/axios";

const QuoteAPI = {
    getCias: async () => {
        const request = await suasmilhas_api.get('/cias');
        return request.data.cia;
    },

    getQuote: async (ciaID: number, quantity: number) => {
        const request = await suasmilhas_api.get(`/miles/${ciaID}/${quantity}`);
        return request.data.quote;
    }
};

export default QuoteAPI;