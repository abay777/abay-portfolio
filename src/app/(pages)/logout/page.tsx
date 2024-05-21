'use client'

import { appwriteService } from "@/appwrite/config";
import { useAuth } from "@/context/UseAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Logoutpage = () => {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    useEffect(()=>{
        appwriteService.logout().then(()=>{
          toast.success('session logged out successfully')
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
