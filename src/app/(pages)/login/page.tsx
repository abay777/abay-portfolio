'use client'

import { appwriteService } from "@/appwrite/config";
import Login from "@/components/Login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "@/context/UseAuth";
import toast from "react-hot-toast";

 const LoginPage = () => {
  const {adminStatus} = useAuth()
  const router  = useRouter()
 const currentUser = appwriteService.getCurrentUser();

 useEffect(() =>{
   if(adminStatus) {
    router.push('/admin')
   }
 },)
 


  return (
    <>
    <main>

     <Login/>
  
    </main>
    </>
  )
};

export default LoginPage