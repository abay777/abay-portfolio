"use client"

import React, { FormEvent, useState } from "react";
import { appwriteService } from "@/appwrite/config";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/UseAuth";
import { Signup } from "@/components/Signup";


 const SignupPage = () => {
  const router = useRouter();
  const {authStatus}= useAuth();

  if(authStatus){
   return router.push('/login')
  } 


  return (
   <>
    <p className=" text-3xl text-center font-bold mx-10 tracking-wide  my-10 "> 
    currently the signup page has been put off from function as per the owner instruction
    </p>
   </>
  )
};


export default SignupPage