import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';

import logo from '../../assets/logo.png';
import { BASE_URL } from '../../Config/base';

export const TopBar = () => {

    const auth = useContext(AuthContext);

    const handleClick = async (url: string) => {
        try {

            const tab = await chrome.tabs.create({ url });

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <header className='w-full flex items-center gap-2'>
            <div className='w-[60%] flex items-center gap-2'>
                <div className='w-[45px]'>
                    <img src={logo} alt="logo-app" className='w-full' />
                </div>
                <div>
                    <h2 className='text-[#1E1E1E] text-[1.2rem] leading-[1.2rem] font-semibold'>Suasmilhas.com</h2>
                    <h2 className="text-[#868686] text-[.8rem] leading-[1.2rem]">CALCULADORA DE MILHAS</h2>
                </div>
            </div>
            <div className='w-[40%] flex justify-end'>
                <span className='text-right text-[1.2rem] cursor-pointer'
                    onClick={() => handleClick(`${BASE_URL}/perfil`)}>
                    Olá <b>{auth.user?.name?.substring(0, 8)}</b>
                </span>
            </div>
        </header >
    );
};
