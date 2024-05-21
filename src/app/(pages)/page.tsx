"use client"
import { appwriteService } from "@/appwrite/config";
import { Header, Home1 } from "@/components";
import { useAuth } from "@/context/UseAuth";
import { useRouter } from "next/navigation";


const Home = () => {
  const {adminStatus} = useAuth()
  return (
    <>
     <Header/>
        {
         adminStatus ?( 
          <div>
            <div className="font-extrabold text-xl ml-2 text-green-400">Admin is present</div>
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
