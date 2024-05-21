import { createContext } from "react";

const AuthContext = createContext<{
        authStatus:boolean;
        setAuthStatus:(status:boolean)=>void;
        adminStatus:boolean;
        setAdminStatus:(status:boolean) => void;
    }>({
        authStatus:false,
        setAuthStatus:() => {

        },
        adminStatus:false,
        setAdminStatus:()=>{
            
        }
    })

  export const AuthProvider = AuthContext.Provider;
  export default AuthContext