import { TopBar } from "../../components/TopBar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../interfaces/IUser";

import googleIcon from '../../assets/google.svg';

import {
    EyeIcon,
    EyeSlashIcon,
    ShieldCheckIcon,
    UserCircleIcon
} from "@heroicons/react/24/solid";

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
    const [password, SetPassword] = useState<Boolean>(false);

    const onSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <div className="w-full px-[3rem] py-[2rem]">
            <TopBar />
            <main className="mt-[2rem]">
                <h1 className="text-[1.2rem]  font-medium pb-4">Login</h1>
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex flex-col gap-3">

                        <div className="w-full bg-[##141414] bg-[#ffffff] rounded-lg p-[.7rem] flex gap-4 border">
                            <UserCircleIcon className="w-7 text-zinc-200" />
                            <input
                                {...register("email", { required: "Preencha o seu e-mail corretamente.", })}
                                type="text"
                                autoComplete="off"
                                className="w-full bg-transparent text-zinc-700  outline-none placeholder-zinc-300 text-[.9rem]"
                                placeholder="email@exemplo.com" />
                        </div>

                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className="text-[.8rem] text-[#F21B3F]">{message}</p>} />


                        <div className="w-full bg-[##141414] bg-[#ffffff] rounded-lg p-[.7rem] flex gap-4 border">
                            <ShieldCheckIcon className="w-8 text-zinc-200" />
                            <input
                                {...register("password", { required: "Preencha sua senha corretamente.", })}
                                type={password ? "text" : "password"}
                                className="w-full bg-transparent text-zinc-700  outline-none placeholder-zinc-300 text-[.9rem]"
                                placeholder="sua senha" />
                            <div onClick={() => { SetPassword(!password) }}>
                                {password ? <EyeSlashIcon className="w-6 cursor-pointer text-zinc-200" /> : <EyeIcon className="w-6 cursor-pointer text-zinc-200" />}
                            </div>
                        </div>

                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className="text-[.8rem] text-[#F21B3F]">{message}</p>} />

                        <div className="text-center flex gap-1 justify-end">
                            <Link to={""}><span className="text-[.9rem] hover: font-medium">Esqueci minha senha</span></Link>
                        </div>

                        <button className="bg-[#17E077] hover:bg-[#2ac575] text-white text-[1rem] font-semibold p-[.7rem] border rounded-lg mt-3">
                            Entrar
                        </button>

                        <button className="border font-semibold p-[.7rem] rounded-lg mt-1 flex gap-3 text-[1rem] justify-center items-center text-zinc-400 hover:bg-zinc-100">
                            <img src={googleIcon} alt="google-logo" />
                            Continuar com o Google
                        </button>

                        <div className="w-full text-center mt-5">
                            <span className="text-[.9rem]">Não possui conta ? <Link className="font-medium hover:text-[#17E077]" to={"/register"}>Crie agora, é gratuito</Link></span>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}