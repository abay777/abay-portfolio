'use client'
import { Inter } from "next/font/google";
import { appwriteService } from "@/appwrite/config";
import { Poppins } from "next/font/google";
import { Header } from "@/components";
import { AuthProvider } from "@/context/authContext";
import { useState, useEffect } from "react";

const Poppinss = Poppins({ 
  subsets: ["latin"],
  weight:['400','600','700']
 });
 


 const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
      appwriteService.isLoggedIn()
      .then((status)=>{
        setAuthStatus(Boolean(status))
      })
      .finally(()=>setLoader(false))
      
  }, []);

  return <AuthProvider value={{ authStatus, setAuthStatus }}>
         {children}
      </AuthProvider>

}

export default ProtectedLayout;