"use client"
import { appwriteService } from "@/appwrite/config";
import { Home1 } from "@/components";
import { useAuth } from "@/context/UseAuth";
import { useRouter } from "next/navigation";


const Home = () => {
  const {authStatus} = useAuth()
  console.log(appwriteService.getCurrentUser())
  return (
    <>
        {
          authStatus ?( 
          <div>
            <div className="font-extrabold text-xl">Admin is present</div>
             <Home1/>
          </div>
          ):(
            <Home1/>
          )
        }
          
       
    </>

  )

};

export default Home;
