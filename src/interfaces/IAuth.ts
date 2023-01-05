import { IUser } from "./IUser";

export interface IAuthContext {
    user: IUser | null;        
    loading: Boolean;
    handleLoading: (status: Boolean) => void;    
}

export interface IAuthProvider {
    children: JSX.Element
}