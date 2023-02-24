import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardTransferes } from "../../components/CardTrandferes";
import { Navbar } from "../../components/Navbar";
import { TopBar } from "../../components/TopBar";
import AuthContext from "../../Contexts/AuthContext";
import PromotionAPI from "../../Hooks/usePromotion";
import { IPromotion } from "../../interfaces/IPromotions";

import airplaneIcon from '../../assets/airplane.svg';

export const Transfers = () => {

    const auth = useContext(AuthContext);
    const [promotions, setPromotions] = useState<IPromotion[]>([]);

    useEffect(() => {
        getPromotions();
    }, []);

    const getPromotions = async () => {
        try {

            if (!auth.user?.token || !auth.user.id) {
                setPromotions([]);
                auth.handleLoading(false);
                console.log("unauthorized");
                return;
            }

            auth.handleLoading(true);

            const request = await PromotionAPI.getPromotions({
                token: auth.user?.token,
                userId: auth.user?.id
            });

            setPromotions(request.promotion);
            auth.handleLoading(false);

        } catch (error) {
            console.log(error);
            auth.handleLoading(false);
        }
    }

    return (
        <div className="relative">
            <div className="w-full absolute top-0 left-0 h-full">
                <div className="flex items-center h-[6rem] px-3 border-b">
                    <TopBar />
                </div>
                <main className="w-full flex justify-center items-center h-[26rem] p-[1rem]">
                    {promotions && promotions.length > 0
                        ?
                        <div className="w-full h-full flex flex-col gap-2">
                            <h1 className="text-[.8rem] font-light text-center text-zinc-500">
                                Confira abaixo as últimas promoções de bônus.
                                Ganhe mais pontos ao transferir pontos do seu banco.
                            </h1>

                            <div className="mt-4 overflow-y-auto">
                                {promotions.map((promotion: IPromotion) => (
                                    <div className="px-4">
                                        <CardTransferes
                                            id={promotion.id}
                                            bonus={promotion.bonus}
                                            link={promotion.link}
                                            cia={promotion.cia}
                                            programs={promotion.programs}
                                            start_date={promotion.start_date}
                                            end_date={promotion.end_date}
                                            status={promotion.status} />
                                    </div>
                                ))}
                            </div>

                        </div>
                        :
                        <div className="w-full h-full text-center flex flex-col justify-center">
                            <div className="w-[250px] mx-auto animate-bounce">
                                <img src={airplaneIcon} alt="" />
                            </div>
                            <span className="text-[1rem] font-light leading-5 block my-5 text-zinc-600">
                                Desculpe! nenhuma transferências bonificadas disponível.
                            </span>
                            <div className="hover:scale-105">
                                <Link to="/quote" className="cursor-pointer bg-[#17E077] mt-4 p-3 text-center text-white text-[.8rem] font-medium rounded">
                                    VOLTAR PARA HOME
                                </Link>
                            </div>
                        </div>
                    }
                </main>
                <div className="w-full h-[4rem] fixed bottom-0 border-t flex items-center">
                    <Navbar locale="transfers" />
                </div>
            </div>
        </div>
    );
};