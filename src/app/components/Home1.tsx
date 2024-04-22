import React from "react";
import { About, Contact, Header, Hero } from ".";

export const Home1:React.FC = () => {
  return (
    <>
       <main className="flex min-h-screen flex-col justify-normal gap-10 pt-5 px-10  lg:px-16 py-20">
            <Hero/>
            <About/>
            <Contact/>
       </main>
    </>
  );
};
