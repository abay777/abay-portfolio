'use client'

import { appwriteService } from "@/appwrite/config";
import Login from "@/components/Login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "@/context/UseAuth";
import toast from "react-hot-toast";


 const LoginPage = () => {
  const {authStatus} = useAuth()
  const router  = useRouter()
 const currentUser = appwriteService.getCurrentUser();
 
 if(authStatus) {
  router.push('/admin')
 }


  return (
    <>
    <main>

     <Login/>
     <div className="mx-auto flex justify-center items-center mt-4">
      <Link className="bg-blue-500 px-4 py-2 text-center font-bold hover:bg-red-600 rounded "  href={'/logout'}>Logout</Link>
     </div>
    </main>
    </>
  )
};

export default LoginPage