import React, { useState } from "react";
import { Mulish } from "next/font/google";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { appwriteService } from "@/appwrite/config";
import { useAuth } from "@/context/UseAuth";
import AuthContext from "@/context/authContext";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const{authStatus} = useAuth();


  return (
    <nav className="">
      <section className=" justify-between items-center hidden md:flex shadow-sm shadow-white  w-full px-10 py-2">
        <div className="font-bold tracking-widest text-3xl">Abay sankar</div>
        <div>
          <ul
            className={`flex gap-4 justify-center items-center font-light  ${mulish.className}`}
          >
            <Link href="#home">
            <li className="hover:animate-pulse hover:text-[#147efb]">Home</li></Link>
            <Link href="#about">
              <li className="hover:animate-pulse hover:text-[#147efb]">About</li>
              </Link>
              <Link href="#projects">
                <li className="hover:animate-pulse hover:text-[#147efb]">
                  Projects
                </li>
              </Link>
              <Link href="#contact">
                <li className="hover:animate-pulse hover:text-[#147efb]">
                  Contact
                </li>
              </Link>
                {authStatus?(
                  <Link href="/logout">
                <li className="hover:animate-pulse hover:text-[#147efb]" >
                  Logout
                </li>
              </Link>
                ):( <Link href="/login">
                <li className="hover:animate-pulse hover:text-[#147efb]">
                  Login
                </li>
              </Link>)
              }
          </ul>
        </div>
        {/* mobile nav */}
      </section>

      <section
        className={`z-30 md:hidden visible  transition-all ease-in-out duration-300   ${
          isMenuOpen
            ? "bg-gray-600 fixed top-0 bottom-0 left-0 right-0"
            : "bg-transparent"
        }`}
      >
        <div
          className={`${mulish.className} font-bold tracking-widest text-3xl flex justify-between mx-5 py-2`}
        >
          Abay sankar
          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <CiMenuBurger size={50} className={` ${isMenuOpen ? "hidden" : "visible"}`} />
            <MdOutlineClose size={50}
              className={` ${isMenuOpen ? "visible" : "hidden"}`}
            />
          </div>
        </div>
        <div className={`${isMenuOpen ? "flex justify-center " : "hidden"} mt-20 `}>
          <ul
            className={`flex flex-col gap-16  justify-center items-center font-light text-5xl  ${mulish.className}`}
          >
            <Link href="#home" onClick={()=>{setIsMenuOpen(false)}}>
              <li  className="hover:animate-pulse hover:text-[#147efb]">Home</li>
            </Link>
            <Link href="#about" onClick={()=>{setIsMenuOpen(false)}}>
              <li className="hover:animate-pulse hover:text-[#147efb]">
                About
              </li>
            </Link>
            <Link href="#projects" onClick={()=>{setIsMenuOpen(false)}}>
              <li className="hover:animate-pulse hover:text-[#147efb]">
                Projects
              </li>
            </Link>
            <Link href="#contact" onClick={()=>{setIsMenuOpen(false)}}>
            <li className="hover:animate-pulse hover:text-[#147efb]">
              Contact
            </li>
            </Link>
          </ul>
        </div>
      </section>
    </nav>
  );
};
