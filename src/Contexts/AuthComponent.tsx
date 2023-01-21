import { useContext } from "react";

import { IAuthProvider } from "../interfaces/IAuth";
import { Welcome } from "../pages/Welcome";
import AuthContext from "./AuthContext";

export const AuthComponent = ({ children }: IAuthProvider) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Welcome />;
    }

    return children;
};