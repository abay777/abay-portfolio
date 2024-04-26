import React from "react";
import { Mulish } from "next/font/google";
const mulish = Mulish({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });

export const Header:React.FC = () => {
  return (
    <nav className="">
        <section className=" justify-between items-center hidden md:flex shadow-sm shadow-white  w-full px-10 py-2">
            <div className="font-bold tracking-widest text-2xl">
                Abay sankar
            </div>
            <div>
                <ul className={`flex gap-4 justify-center items-center font-light  ${mulish.className}`}>
                    <li className="hover:animate-pulse hover:text-[#147efb]">Home</li>
                    <li className="hover:animate-pulse hover:text-[#147efb]">About</li>
                    <li className="hover:animate-pulse hover:text-[#147efb]">Projects</li>
                    <li className="hover:animate-pulse hover:text-[#147efb]">Contact</li>
                </ul>
            </div>
        </section>
    </nav>
  )
};
