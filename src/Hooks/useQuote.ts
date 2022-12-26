import axios from "axios";

const suasmilhas_api = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const suasmilhas = {
    getCias: async () => {
        const request = await suasmilhas_api.get('/cias');
        return request.data.cia;
    },

    getQuote: async (ciaID: number, quantity: number) => {
        const request = await suasmilhas_api.get(`/miles/${ciaID}/${quantity}`);
        return request.data.quote;
    }
};