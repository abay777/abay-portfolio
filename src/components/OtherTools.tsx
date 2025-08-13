import Image from "next/image";
import React from "react";
import otherTools from "@/../../public/otherTools.png"

const OtherTools = () => {
return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-5 px-6 ">
        <h1 className="md:border-b-0 md:border-r-2 border-gray-500 px-10 capitalize border-b-2">Other Tools</h1>
        <main className="flex flex-col md:flex-row justify-center items-center md:self-start">
            <div>
                <Image src={otherTools} height={69} alt="tools other" />

            </div>
        </main>
    </section>
 )
}
export default OtherTools;
