import Image from "next/image";
import React from "react";
import sqaure from "@/../../public/darkModeDevSymbol.avif";
import circle from "@/../../public/web-developer-circle.svg";
import devIcon from "@/../../public/dev icon.png";
import { Mulish } from "next/font/google";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });
  

export const About: React.FC = () => {
  return (
    <main className="flex md:flex-row flex-col justify-center items-center gap-16 mt-16">
      <section className="relative w-full">
        <Image
          src={sqaure}
          width={401}
          height={393}
          className="object-contain rounded-3xl  mx-auto md:mx-0"
          alt="web development "
        />
        <div className="absolute hidden lg:flex -bottom-[2rem] rounded-full right-[3rem] bg-black p-16">

            <Image
            src={devIcon}
            width={70}
            height={100}
            alt="web development "
            />
              <Image
            src={circle}
            width={300}
            height={100}
            className="absolute bottom-0 right-[.2rem] invert animate-spin "
            alt="web development "
            />

        </div>
      </section >
      <section className="w-full flex flex-col justify-self-end gap-5 " >
        <h1 className="text-blue-600 font-bold text-xl  text-center  md:text-justify">About Me</h1>
        <h2 className="text-xl font-bold w-8/12 text-center md:text-justify mx-auto md:mx-0"> Front-end React Developer based in kerala, India. 📍</h2>
        <p className={`text-gray-600 ${mulish.className} mx-auto  md:mx-0  text-center md:text-justify w-10/12 `}> Hey, my name is Abay, and I&apos;m a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p className={`text-gray-600 ${mulish.className} mx-auto md:mx-0 text-center md:text-justify w-10/12 `} >
          Current Tech Stack is Next js/React js with server side rendering
          experience incorporated with TypeScript,Tailwind
          <br />
          hands on experience with Appwrite , MongoDB
        </p>
      </section>
    </main>
  );
};
