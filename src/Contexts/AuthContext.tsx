import { createContext, useEffect, useState } from "react";
import { IAuthContext, IAuthProvider } from "../interfaces/IAuth";

import { IUser } from "../interfaces/IUser";
import Chrome from "../Hooks/useChrome";
import AuthenticationAPI from "../Hooks/useAuthenticate";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        isAuthenticated();
    }, []);

    const isAuthenticated = async () => {
        try {

            const token = await Chrome.getCookie('0bd94827c2f6c2c3843cbd964ccefeba', 'http://localhost');
            const userId = await Chrome.getCookie('token', 'http://localhost');

            if (!token.value || !userId.value) {
                console.log("TOKEN ERROR");
                setUser(null);
                return;
            }

            const request = await AuthenticationAPI.isAuthenticated({
                token: `Bearer ${token.value}`,
                userId: userId.value
            });

            if (!request.user) {
                console.log("USER UNAUTHORIZED");
                setUser(null);
                return;
            }

            setUser({
                id: request.user.id,
                name: request.user.name,
                email: request.user.email
            });

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