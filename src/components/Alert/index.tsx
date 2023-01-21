import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

import alertIcon from "../../assets/alert.svg";

export const Alert = () => {

    const auth = useContext(AuthContext);

    const handleClick = async (url: string) => {
        try {

            const tab = await chrome.tabs.create({ url });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full rounded mb-4 p-4 bg-[#fceeee] flex items-center justify-between animate-pulse">
            <div className="flex items-center gap-4 text-[#F59999]">
                <img src={alertIcon} alt="alert-icon" className="w-6" />
                {auth.user?.isVip
                    ?
                    <div className="">
                        <span className="block text-[.9rem] font-medium">Sua assinatura expirou!</span>
                        <span className="block text-[.8rem]">Você está usando o modo limitado</span>
                    </div>
                    :
                    <div className="">
                        <span className="block text-[.9rem] font-medium">Seu período de teste expirou!</span>
                        <span className="block text-[.8rem]">Você está usando o modo limitado</span>
                    </div>
                }
            </div>
            <div className="hover:scale-105">
                <span className="cursor-pointer bg-[#17E077] p-2 text-center text-white text-[.7rem] font-bold rounded"
                    onClick={() => handleClick(`http://localhost:3000/chrome/assinatura`)}>
                    VERIFICAR
                </span>
            </div>
        </div>
    );
}