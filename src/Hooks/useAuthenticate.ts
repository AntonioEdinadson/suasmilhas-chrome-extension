import suasmilhas_api from "../Config/axios";
import { ICredentials } from "../interfaces/ICredentials";

const AuthenticationAPI = {
    isAuthenticated: async (credentials: ICredentials) => {
        const request = await suasmilhas_api.post('/token', credentials);
        return request.data;
    }
};

export default AuthenticationAPI;