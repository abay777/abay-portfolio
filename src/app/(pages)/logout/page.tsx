'use client'

import { appwriteService } from "@/appwrite/config";
import { useAuth } from "@/context/UseAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Logoutpage = () => {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    useEffect(()=>{
        appwriteService.logout().then(()=>{
            console.log('logout initiated')
            setAuthStatus(false)
            router.replace('/login')
        })
    },)
  return (
    <>
    </>
  )
};

export default Logoutpage;
