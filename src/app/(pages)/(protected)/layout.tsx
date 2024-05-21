"use client"
import { useAuth } from "@/context/UseAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ProtectedLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const router = useRouter()
    const {authStatus,adminStatus} = useAuth()

    useEffect(() => {
      if (!adminStatus) {
        router.replace('/login');
      }
    }, [adminStatus, router]);
  
    if (!adminStatus) {
      return null; // Optionally, you can render a loading spinner or some other placeholder
    }
  
    return <>{children}</>;
  };

export default ProtectedLayout