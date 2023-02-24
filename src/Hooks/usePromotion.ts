import suasmilhas_api from "../Config/axios";
import { ICredentials } from "../interfaces/ICredentials";

const PromotionAPI = {
    getPromotions: async (credentials: ICredentials) => {
        const request = await suasmilhas_api.get('/promotion', {
            headers: {
                "Authorization": `Bearer ${credentials.token}`,
                "userid": `${credentials.userId}`,
            }
        });
        return request.data;
    }
};

export default PromotionAPI;