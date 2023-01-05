import { createContext, useEffect, useState } from "react";
import { authentication } from "../Hooks/useQuote";
import { IAuthContext, IAuthProvider } from "../interfaces/IAuth";
import { IUser } from "../interfaces/IUser";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        isAuthenticated();
    }, []);

    const isAuthenticated = async () => {
        try {

        } catch (error) {
            console.log(error);
        }
    };

    const handleLoading = (status: Boolean) => {
        setLoading(status)
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;