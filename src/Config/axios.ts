import axios from "axios";
import { BASE_URL_API } from "./base";

const suasmilhas_api = axios.create({
    baseURL: BASE_URL_API,
    headers: { "Content-Type": "application/json" }
});

export default suasmilhas_api;