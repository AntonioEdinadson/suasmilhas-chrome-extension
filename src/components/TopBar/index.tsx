import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface ITopbarComponent {
    name: string;
}

export const TopBar = (props: ITopbarComponent) => {
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
            <div className='w-[40%]'>
                <Link to='/config' className='flex gap-3 justify-end'>
                    <span className='block'>Olá <b>{props.name}</b></span>
                    <ChevronRightIcon className='w-4 text-[#868686]' />
                </Link>
            </div>
        </header>
    );
};
