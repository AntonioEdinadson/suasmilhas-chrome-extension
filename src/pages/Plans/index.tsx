import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";

import { Navbar } from "../../components/Navbar";
import { TopBar } from "../../components/TopBar";

import medalIcon from '../../assets/medal.svg';
import airplaneIcon from '../../assets/airplane.svg';

import { IPlan, ISubscribedPlan } from "../../interfaces/IPlan";
import PlanAPI from "../../Hooks/usePlan";
import { Link } from "react-router-dom";
import { Alert } from "../../components/Alert";

import moment from "moment";
import { BASE_URL } from "../../Config/base";


export const Plans = () => {

    const auth = useContext(AuthContext);
    const [plans, setPlans] = useState<IPlan[] | null>(null);
    const [signature, setSignature] = useState<ISubscribedPlan | null>(null);

    useEffect(() => {
        getPlans();
    }, []);

    const getPlans = async () => {
        try {

            auth.handleLoading(true);

            if (!auth.user?.token || !auth.user.id) {
                setPlans(null);
                auth.handleLoading(false);
                console.log("unauthorized");
                return;
            }

            const request = await PlanAPI.getPlans({ token: auth.user.token, userId: auth.user.id });

            if (!request.plan) {
                setPlans(null);
                auth.handleLoading(false);
                console.log("not plans");
                return;
            }

            localStorage.setItem(import.meta.env.VITE_PLANS, JSON.stringify((request.plan)));
            localStorage.setItem(import.meta.env.VITE_SIGNATURE, JSON.stringify((request.subscribedPlan)));

            setPlans(request.plan);
            setSignature(request.subscribedPlan);
            auth.handleLoading(false);

        } catch (error: any) {
            console.log(error.message);
            auth.handleLoading(false);
        }
    };

    const handleClick = async (url: string) => {
        try {

            const tab = await chrome.tabs.create({ url });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative">
            <div className="w-full absolute top-0 left-0 h-full">
                <div className="flex items-center h-[6rem] px-3 border-b">
                    <TopBar />
                </div>
                <main className="w-full flex justify-center h-[26rem] p-[1rem]">
                    {plans && plans.length > 0
                        ?
                        <div className="w-full">
                            {signature?.daysRemaining && signature.daysRemaining > 0
                                ?
                                <div className="w-full border rounded flex justify-between items-center px-4 py-2">
                                    <div className="w-[40%] flex items-center gap-2">
                                        <img src={medalIcon} alt="medal" className="w-8" />
                                        <span className="text-[1.2rem] font-bold text-zinc-500">{signature?.planName}</span>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="w-[60%] flex flex-col items-end">
                                        <span className="font-semibold block text-[1rem] text-zinc-500">{signature?.daysRemaining} {signature?.daysRemaining > 1 ? "dias restantes" : "dia restante"}</span>
                                        <span className="text-[.8rem] text-zinc-400">inscrito em {moment(signature.created_at).format('DD/MM/YYYY')}</span>
                                    </div>
                                </div>
                                :
                                <Alert />
                            }
                            <div className="w-full mt-4">
                                {plans.map((card: IPlan, index) => (
                                    <div key={index} className="w-full flex items-center p-3 mb-3 bg-zinc-100 rounded">
                                        <div className="w-[70%]">
                                            <h1 className="text-[1rem] text-zinc-500 font-semibold">{card.name}</h1>
                                            <span className="block font-medium text-[.9rem] text-zinc-500">{card.description}</span>
                                            <span className="text-[.9rem] text-zinc-400">+ beneficios</span>
                                        </div>
                                        <div className="w-[30%] flex flex-col gap-1">
                                            <div className="flex items-center justify-end gap-1">
                                                <span className="block text-[1rem] font-bold text-zinc-500">
                                                    {card.price.toLocaleString("pt-BR", {
                                                        minimumFractionDigits: 2,
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </span>
                                                <span className="block text-[.7rem] text-zinc-400">/ mês</span>
                                            </div>
                                            <span className="cursor-pointer bg-[#17E077] py-1 text-center text-white text-[.8rem] font-medium rounded hover:scale-105"
                                                onClick={() => handleClick(`${BASE_URL}/assinatura/${card.id}`)}>
                                                ASSINAR
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <div className="w-full text-center mt-12">
                            <div className="w-[250px] mx-auto animate-bounce">
                                <img src={airplaneIcon} alt="" />
                            </div>
                            <span className="text-[1rem] leading-5 block my-5 text-zinc-600">Desculpe! Houve um erro ao carregar nossos planos de assinatura.</span>
                            <div className="hover:scale-105">
                                <Link to="/quote" className="cursor-pointer bg-[#17E077] mt-4 p-3 text-center text-white text-[.8rem] font-medium rounded">
                                    VOLTAR PARA HOME
                                </Link>
                            </div>
                        </div>
                    }
                </main>
                <div className="w-full h-[4rem] fixed bottom-0 border-t flex items-center">
                    <Navbar locale="plans" />
                </div>
            </div>
        </div>
    );
};