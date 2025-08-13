import Image from "next/image";
import React from "react";
import sqaure from "../../public/darkModeDevSymbol.avif";
import circle from "@/../../public/web-developer-circle.svg";
import devIcon from "@/../../public/developer.gif";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const About: React.FC = () => {
  return (
    <main className="flex md:flex-col flex-col justify-center items-center gap-5 mt-16">
      <div className="flex flex-col justify-center items-center gap-4">

      <h4 className="text-blue-600 font-bold text-3xl  text-center m-0 p-0 ">About Me</h4>
      {/* <h4 className="text-xl font-bold text-center mx-auto md:mx-0 m-0 p-0">FullStack Developer based india. 📍</h4> */}
      </div>
      <main className="flex flex-col md:flex-row justify-center items-center md:items-start m-0 p-0">
        <section className="relative w-[80%]  h-full " id="about">
          <Image
            src={devIcon}
            width={401}
            height={393}
            className="object-contain rounded-3xl  w-full h-[80%] px-5 md:mx-0"
            alt="web development "
          />
        </section >
        <section className="w-full flex flex-col justify-self-end gap-5 " >

          <p className={`text-gray-600 ${mulish.className} mx-auto  md:mx-0  text-center md:text-justify w-10/12 `}>Hi, I’m Abay — a passionate Full-Stack Developer with a focus on building clean, intuitive UI/UX and robust, scalable backend systems. I thrive on turning ideas into seamless, high-performance web applications that deliver real value to users.</p>
          <p className={`text-gray-600 ${mulish.className} mx-auto md:mx-0 text-center md:text-left w-10/12 `} >
            My core tech stack is MERN (MongoDB, Express.js, React, Node.js) enhanced with Next.js for server-side rendering, TypeScript for type-safe development, and modern tools like Firebase and Appwrite for rapid, reliable backend solutions.

            I bring hands-on experience in database design and management (MongoDB), authentication & authorization systems, API integration, and performance optimization. I aim to craft maintainable, efficient code that not only works but works well at scale.

            <br />
            hands on experience with Appwrite , MongoDB
          </p>
        </section>
      </main>
    </main>
  );
};
