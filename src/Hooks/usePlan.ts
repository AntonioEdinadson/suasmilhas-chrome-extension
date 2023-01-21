import suasmilhas_api from "../Config/axios";
import { ICredentials } from "../interfaces/ICredentials";

const PlanAPI = {
    getPlans: async (credentials: ICredentials) => {
        const request = await suasmilhas_api.get('/plan', {
            headers: {
                "Authorization": `Bearer ${credentials.token}`,
                "userid": `${credentials.userId}`,
            }
        });
        return request.data;
    }
};

export default PlanAPI;