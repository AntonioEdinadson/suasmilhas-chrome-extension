import axios from "axios";

const suasmilhas_api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { "Content-Type": "application/json" }
});

export default suasmilhas_api;