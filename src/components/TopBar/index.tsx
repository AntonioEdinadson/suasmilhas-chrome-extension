import logo from '../../assets/logo.png';

export const TopBar = () => {
    return (
        <div className='w-full flex gap-2 items-center'>
            <div className='w-[45px]'>
                <img src={logo} alt="logo-app" className='w-full' />
            </div>
            <div>
                <h2 className='text-[#1E1E1E] text-[1.2rem] leading-[1.2rem] font-semibold'>Suasmilhas.com</h2>
                <h2 className="text-[#868686] text-[.8rem] leading-[1.2rem]">CALCULADORA DE MILHAS</h2>
            </div>
        </div>
    );
};