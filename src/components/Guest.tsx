import { appwriteService } from "@/appwrite/config";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export const Guest:React.FC = () => {

    const guestMode =async ()=>{
        try {
            await appwriteService.anonymousUser()
            toast.success('guest mode')
        } catch (error:any) {
            toast.error(error.message)
        }
            

    }


  return (
    <div className="flex justify-center items-center">
        <button
        className="bg-green-500 border-black border-2 rounded-xl px-4 py-3"
         onClick={guestMode}>
            guest Mode

        </button>

    </div>
  )
};
