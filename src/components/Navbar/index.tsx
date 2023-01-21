import { AdjustmentsHorizontalIcon, CurrencyDollarIcon, FireIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface INavbarComponent {
    locale: string;
}

export const Navbar = (props: INavbarComponent) => {
    return (
        <div className="w-full flex justify-around items-center gap-2">
            <Link to="/quote">
                <FireIcon className={`w-8 text-zinc-400 hover:scale-125 cursor-pointer ${props.locale == 'quote' && "text-[#17E077]"}`} />
            </Link>
            <Link to="/plans">
                <CurrencyDollarIcon className={`w-8 text-zinc-400 hover:scale-125 cursor-pointer ${props.locale == 'plans' && "text-[#17E077]"}`} />
            </Link>            
        </div>
    );
};