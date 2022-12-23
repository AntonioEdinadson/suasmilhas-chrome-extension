import { AdjustmentsHorizontalIcon, CurrencyDollarIcon, FireIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
    return (
        <div className="w-full flex justify-around items-center gap-2">
            <FireIcon className="w-8 text-zinc-400 hover:scale-110 cursor-pointer" />
            <CurrencyDollarIcon className="w-8 text-zinc-400 hover:scale-110 cursor-pointer" />
            <AdjustmentsHorizontalIcon className="w-8 text-zinc-400 hover:scale-110 cursor-pointer" />
        </div>
    );
};