import { useContext } from "react";
import AuthContext from "./authContext";


export type Data = {
    authStatus:boolean;
    setAuthStatus:(status:boolean)=>void;
    adminStatus:boolean;
    setAdminStatus:(status:boolean)=>void;
    
}
type UseAuth = () => Data;
export const useAuth:UseAuth = () => {
        const data = useContext(AuthContext);
        return data
}