import { useContext } from "react";
import AuthContext from "./authContext";


type Data =()=> {
    authStatus:boolean;
    setAuthStatus:(status:boolean)=>void;
}
export const useAuth:Data = () => {
        const data = useContext(AuthContext);
        return data
}