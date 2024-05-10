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
   <Signup/>
   </>
  )
};


export default SignupPage