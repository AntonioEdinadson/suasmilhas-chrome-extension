import suasmilhas_api from "../Config/axios";
import { ICredentials } from "../interfaces/ICredentials";

const QuoteAPI = {
    getCias: async (credentials: ICredentials) => {
        const request = await suasmilhas_api.get('/cias', {
            headers: {
                "Authorization": `Bearer ${credentials.token}`,
                "userid": `${credentials.userId}`,
            }
        });
        return request.data.cia;
    },

    getQuote: async (ciaID: number, quantity: number, credentials: ICredentials) => {
        const request = await suasmilhas_api.get(`/miles/${ciaID}/${quantity}`, {
            headers: {
                "Authorization": `Bearer ${credentials.token}`,
                "userid": `${credentials.userId}`,
            }
        });
        return request.data.quote;
    }
};

export default QuoteAPI;