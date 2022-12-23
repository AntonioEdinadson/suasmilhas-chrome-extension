import { MyApplications } from "../MyApplications";
import { TopBar } from "../TopBar";

export const Header = () => {
    return (
        <div>
            <div className="border-b px-[.7rem] py-[1.3rem]">
                <TopBar />
            </div>
            <header className="p-2">
                <MyApplications />
            </header>
        </div>
    );
};