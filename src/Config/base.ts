const ENV = import.meta.env.VITE_AMBIENT;

export const BASE_URL = ENV == 'production'
    ? import.meta.env.VITE_BASE_URL_PROD
    : import.meta.env.VITE_BASE_URL_DEV

export const BASE_URL_API = ENV == 'production'
    ? import.meta.env.VITE_BASE_URL_API_PROD
    : import.meta.env.VITE_BASE_URL_API_DEV