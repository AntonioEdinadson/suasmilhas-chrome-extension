import logo from '../../assets/logo.png';
import webIcon from '../../assets/web.svg';
import telegramIcon from '../../assets/telegram.svg';


export const TopBar = () => {
    return (
        <div className='w-full flex items-center gap-2'>
            <div className='w-[45px]'>
                <img src={logo} alt="logo-app" className='w-full' />
            </div>
            <div>
                <h2 className='text-[#1E1E1E] text-[1.2rem] leading-[1.2rem] font-semibold'>Suasmilhas.com</h2>
                <h2 className="text-[#868686] text-[.8rem] leading-[1.2rem]">CALCULADORA DE MILHAS</h2>
            </div>
            {/* <div className="flex flex-col gap-2">
                <a target='_blank' href="https://t.me/SuasMilhasBot" className='flex items-center gap-1 hover:scale-105'>
                    <img src={telegramIcon} alt="telegram-logo" />
                    <span className="text-zinc-400 text-[.8rem]">SUASMILHASBOT</span>
                </a>
                <a target='_blank' href="https://suasmilhas.com/" className='flex items-center gap-1 hover:scale-105'>
                    <img src={webIcon} alt="telegram-logo" />
                    <span className="text-zinc-400 text-[.8rem]">SUASMILHAS.COM</span>
                </a>
            </div> */}
        </div>
    );
};