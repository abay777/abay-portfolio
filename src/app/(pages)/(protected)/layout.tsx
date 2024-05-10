"use client"
import { useAuth } from "@/context/UseAuth"
import { useRouter } from "next/navigation"

const ProtectedLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const router = useRouter()
    const {authStatus} = useAuth()

    if(!authStatus) {
      router.push('/login')
      return <></>
    }

return children

  

}

export default ProtectedLayout