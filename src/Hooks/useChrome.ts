import { ICookie } from "../interfaces/ICookie";

const ChromeAPI = {
    getCookie: (name: string, url: string) => {
        return new Promise<ICookie>((resolve, reject) => {
            chrome.cookies.get({ name, url }, (cookie) => {

                if (!cookie) {
                    reject(null);
                    return;
                }

                resolve({
                    domain: cookie.domain,
                    name: cookie.name,
                    value: cookie.value,
                    path: cookie.path,
                    expirationDate: cookie.expirationDate
                });
            });
        })
    }
};

export default ChromeAPI;