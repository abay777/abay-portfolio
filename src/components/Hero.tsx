import { Techstack } from './Techstack';
import React from "react";
import Image from "next/image";
import wave from "@/../../public/waving hand.png";
import abay from "@/../../public/abay with bgs.jpg";
import css from "./hero.module.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { Mulish } from "next/font/google";
import OtherTools from './OtherTools';
import Lightning from './Lightning/Lightning';
import TextType from './specialComponents/TextType/TextType';
import DarkVeil from './specialComponents/DarkVeil/DarkVeil';



const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const Hero: React.FC = () => {
  return (
    <section className='h-max w-full relative'>
      <div className="absolute inset-0 -z-10 overflow-x-hidden overflow-hidden">
        <DarkVeil

          noiseIntensity={0}
          scanlineIntensity={0}
          speed={2}
          scanlineFrequency={1}
          warpAmount={2}
          resolutionScale={1.3}

        />

      </div>
      <main className="flex-col-reverse flex lg:gap-0 gap-10 lg:flex-row justify-center items-center  md:px-0 lg:justify-between lg:items-center p-5 px-10">
        <section className=" flex flex-col justify-center items-center font-extrabold  lg:pt-5 w-full  " id="home">
          <h1
            className="   md:mx-0 leading-tight w-[100%] max-w-[15rem] md:max-w-full md:w-11/12   text-4xl md:text-5xl text-center       
        w-12/12 relative tracking-wide md:tracking-wider md:leading-tight"
          >


          </h1>
          <div className=' relative h-max'>

            <TextType
              text={["I am a Full-Stack Developer", "Hi there , you are in the right place ", "Let's make the world a better place !"]}
              typingSpeed={90}
              pauseDuration={1000}
              className='text-3xl md:text-4xl px-5 md:px-16'
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <p
            className={`mt-10 ${mulish.className}   text-xl md:w-10/12 font-extralight w-12/12 text-center text-gray-500`}
          >
            Hi, I&apos;m Abay Sankar. A passionate full stack Developer
            based in  India. 📍
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
      <div className=' flex flex-col md:flex-col justify-center items-center md:items-start '>
        <Techstack />
        <OtherTools />
      </div>
    </section>
  );
};
