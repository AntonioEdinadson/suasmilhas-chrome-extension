import webIcon from '../../assets/web.svg';
import telegramIcon from '../../assets/telegram.svg';

export const MyApplications = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <h2 className="text-[.8rem] text-zinc-400 uppercase font-medium">Veja támbém </h2>
            <a target='_blank' href="https://t.me/SuasMilhasBot" className='flex items-center gap-1 hover:scale-105'>
                <img src={telegramIcon} alt="telegram-logo" />
                <span className="text-zinc-400 text-[.9rem]">SUASMILHASBOT</span>
            </a>
            <a target='_blank' href="https://suasmilhas.com/" className='flex items-center gap-1 hover:scale-105'>
                <img src={webIcon} alt="telegram-logo" />
                <span className="text-zinc-400 text-[.9rem]">SUASMILHAS.COM</span>
            </a>
            <div></div>
        </div>
    );
};