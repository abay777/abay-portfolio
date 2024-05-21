import React from "react";
import Image from "next/image";
import wave from "@/../../public/waving hand.png";
import abay from "@/../../public/abay with bgs.jpg";
import css from "./hero.module.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { Mulish } from "next/font/google";
import htmlCss from "@/../../public/htmlcssIcon.svg";
import jsTs from "@/../../public/jsandtsicons.svg";
import reactNext from "@../../../public/reactandnextIcon.svg";
import tailwindSass from "@../../../public/tailwind and sass.svg";
import appwrite from "@/../../public/appwriteio-icon.svg";
import mongodb from "@/../../public/mongodb-icon.svg";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const Hero: React.FC = () => {
  return (
    <>
      <main className="flex-col-reverse flex lg:gap-0 gap-10 lg:flex-row justify-center items-center px-5 md:px-0 lg:justify-between lg:items-center ">
        <section className=" flex flex-col justify-center items-center font-extrabold  lg:pt-5 w-full  " id="home">
          <h1
            className="   md:mx-0 leading-tight w-[100%] max-w-[15rem] md:max-w-full md:w-11/12   text-4xl md:text-5xl text-center       
        w-12/12 relative tracking-wide md:tracking-wider md:leading-tight"
          >
            Front-End React Developer
            <Image
              src={wave}
              className=" w-[18%] md:w-[4rem]   absolute lg:bottom-[31%]  md:bottom-0 md:right-[3rem]  mx:right-0  bottom-[35%] right-[4%] mx:bottom-0 mx:right-[2rem] "
              alt="hand"
            />
          </h1>
          <p
            className={`mt-10 ${mulish.className}   text-xl md:w-10/12 font-extralight w-12/12 text-center text-gray-500`}
          >
            Hi, I&apos;m Abay Sankar. A passionate Front-end React Developer
            based in kerala, India. 📍
          </p>
          <div className="flex gap-5 pt-5">
            <a href="https://github.com/abay777">
              <FiGithub
                size={30}
                className={`${css.smoke} hover:text-blue-700 text-white`}
              />
            </a>
            <a href="https://www.linkedin.com/in/abay-sankar-s-95796a248"></a>
              <RiLinkedinBoxLine
                size={30}
                className={`${css.smoke} hover:text-blue-700 text-white`}
              />
          </div>
        </section>
        <div>
          <Image
            src={abay}
            className={`${css.jellyImage} mx-auto lg:mx-0  lg:w-[70%] rounded-full`}
            alt="Picture of Abay Sankar"
          />
        </div>
      </main>
      <section className="flex lg:flex-row flex-col justify-center items-center   md:justify-items-start lg:gap-10   mt-20 self-start md:p-14 pl-5">
        <h1 className="lg:border-r-2 border-b-2 lg:-mt-3   lg:border-b-0  md:border-b-2  lg:pr-5 mb-7 flex justify-center items-center border-gray-500 w-5/12 lg:w-3/12">
          Tech stack
        </h1>
        <main className="flex flex-wrap lg:flex-nowrap md:flex-row md:w-5/12 lg:w-full gap-5  px-5 md:px-0 md:justify-center justify-center items-center">
          <div className="hover:animate-bounce  h-[5rem] flex items-baseline">
            <Image src={htmlCss} priority alt="icons of html and css" />
          </div>
          <div className="hover:animate-bounce h-[5rem] flex items-baseline">
            <Image src={jsTs} priority alt="icons of html and css" />
          </div>
          <div className="hover:animate-bounce h-[5rem] flex items-baseline">
            <Image src={reactNext} priority alt="icons of html and css" />
          </div>
          <div className="hover:animate-bounce h-[5rem] flex items-baseline">
            <Image src={tailwindSass} priority alt="icons of html and css" />
          </div>
          <div className="hover:animate-bounce h-[5rem] flex items-baseline">
            <Image
              src={appwrite}
              height={80}
              className="-mt-3"
              priority
              alt="icons of html and css"
            />
          </div>
          <div className="hover:animate-bounce h-[5rem] flex items-baseline">
            <Image
              src={mongodb}
              height={69}
              className="-mt-3"
              priority
              alt="icons of html and css"
            />
          </div>
        </main>
      </section>
    </>
  );
};
