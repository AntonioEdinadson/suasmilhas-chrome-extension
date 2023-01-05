import telegramIcon from '../../assets/telegram.svg';
import webIcon from '../../assets/web.svg';

export const MyApps = () => {
    return (
        <div className="flex justify-between">
            <span className="text-[.8rem] text-[#878787] font-medium rounded p-1">veja mais</span>
            <a target='_blank' href="https://t.me/SuasMilhasBot" className='flex items-center gap-2 hover:scale-105'>
                <img src={telegramIcon} alt="telegram-logo" />
                <span className="text-zinc-400 text-[.8rem]">SUASMILHASBOT</span>
            </a>
            <a target='_blank' href="https://suasmilhas.com/" className='flex items-center gap-2 hover:scale-105'>
                <img src={webIcon} alt="telegram-logo" />
                <span className="text-zinc-400 text-[.8rem]">SUASMILHAS.COM</span>
            </a>
        </div>
    );
}