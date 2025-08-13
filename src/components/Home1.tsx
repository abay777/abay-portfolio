import React from "react";
import { About, Contact, Header, Hero, Projects } from ".";

export const Home1:React.FC = () => {
  return (
    <>
    <div className="w-full h-max ">

            <Hero/>
    </div>
       <main className="flex min-h-screen flex-col justify-normal gap-5 pt-0 px-0 lg:px-16 py-20">
            <About/>
            <Projects/>
            <Contact/>
       </main>
    </>
  );
};
