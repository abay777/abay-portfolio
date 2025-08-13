import React from "react";
import htmlCss from "@/../../public/htmlcssIcon.svg";
import jsTs from "@/../../public/jsandtsicons.svg";
import reactNext from "@../../../public/reactandnextIcon.svg";
import tailwindSass from "@../../../public/tailwind and sass.svg";
import appwrite from "@/../../public/icon-app-firbase.png";
import mongodb from "@/../../public/db-sql-mongo.png";
import node from "@/../../public/icon-node-express.png";
import Image from "next/image";

export function Techstack() {
  return <section className="flex lg:flex-row flex-col justify-center items-center   md:justify-items-start lg:gap-10   mt-10 self-start md:p-5 pl-5">
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
        <Image src={appwrite} height={80} className="-mt-3" priority alt="icons of html and css" />
      </div>
      <div className="hover:animate-bounce h-[5rem] flex items-baseline">
        <Image src={mongodb} height={69} className="-mt-3" priority alt="icons of html and css" />
      </div>
      <div className="hover:animate-bounce h-[5rem] flex items-baseline">
        <Image src={node} height={69} className="-mt-3" priority alt="icons of html and css" />
      </div>
    </main>
  </section>;
}
