import logo from '../../assets/logo.png';
import { BASE_URL } from '../../Config/base';

export const Welcome = () => {

    const handleClick = async (url: string) => {
        try {

            const tab = await chrome.tabs.create({ url });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative w-full h-full">
            <div className="w-full absolute top-0 left-0 h-full flex justify-center items-center">
                <div className="w-full">
                    <div className="w-[100px] mx-auto mb-2 animate-bounce">
                        <img src={logo} alt="logo-img" className="w-full" />
                    </div>
                    <div className='text-center'>
                        <span className='block text-[1.4rem] font-medium'>Suasmilhas.com</span>
                        <span className='block text-[.8rem] text-zinc-500'>CALCULADORA DE MILHAS</span>
                    </div>
                    <div className='w-[60%] mx-auto mt-12 flex flex-col gap-4'>
                        <span className="cursor-pointer block w-full bg-[#17E077] p-[.7rem] text-center text-white text-[1rem] font-medium rounded hover:scale-105"
                            onClick={() => handleClick(`${BASE_URL}/signin`)}>
                            Já possui conta
                        </span>
                        <span className="cursor-pointer block w-full bg-zinc-200 p-[.7rem] text-center text-white text-[1rem] font-medium rounded hover:scale-105"
                            onClick={() => handleClick(`${BASE_URL}/signup`)}>
                            Criar uma conta
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};