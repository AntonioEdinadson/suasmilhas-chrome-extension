import { useContext } from "react";

import { IAuthProvider } from "../interfaces/IAuth";
import AuthContext from "./AuthContext";

export const AuthComponent = ({ children }: IAuthProvider) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return (
            <div className="text-[5rem]">
                401
            </div>
        );
    }

    return children;
};