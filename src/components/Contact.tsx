import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const Contact:React.FC = () => {
  return (
    <section className="flex flex-col justify-center md:justify-start md:items-start items-center gap-10  mt-16" id="contact">
        <h1 className={`text-blue-600 ${mulish.className} font-extrabold text-xl `}>Contact</h1>
        <h2 className="font-extrabold text-2xl ">Don&apos;t be shy! Hit me up! 👇</h2>
        <div className="text-center flex flex-col md:flex-row gap-16 pt-5">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <GrMapLocation size={45} color="#147efb" className="bg-[#070606] p-2 rounded-full"/>
            <div className=" flex flex-col justify-center items-center md:items-start ">
              <h1 className={`tracking-wide font-bold text-xl ${mulish.className}`}>Location</h1>
              <p className={` text-gray-500 font-extrabold text-lg hover:text-[#147efb] ${mulish.className}`}>
              India</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <CiMail size={45} color="#147efb" className="bg-[#070606] p-2 rounded-full"/>
            <div className=" flex flex-col justify-center items-center md:items-start ">
              <h1 className={`tracking-wide font-bold text-xl ${mulish.className}`}>Mail</h1>
              <a href="mailto:abaysankarwork@gmail.com" className={`flex gap-5 text-lg justify-start items-center hover:underline hover:text-[#147efb] text-gray-500 font-extrabold ${mulish.className}`}>
                abaysankarwork@gmail.com</a>
            </div>
          </div>
        </div>
    </section>
  )
};
