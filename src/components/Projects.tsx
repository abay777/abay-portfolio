import React from "react";
import carRental from '@/../../public/car rent project.jpg'
import Image from "next/image";

export const Projects:React.FC = () => {
  return (
    <>
    <section>
            <h1 className=" mt-36 text-center font-bold text-2xl tracking-widest">MY  Projects ❤️</h1>
        <main className="mt-20 flex md:flex-row md:flex-wrap flex-col justify-center items-center gap-10">
            <div className="w-[18rem] relative card hover:animate-pulse ">
                <a href="https://rentingcar.netlify.app/"
                className="anchor hidden absolute top-0 bottom-0  left-0 right-0 tracking-widest rounded-2xl bg-[#000000c3]  justify-center items-center font-extrabold text-2xl ">
                    Live &#160;<span className=" text-[#29dded] tracking-wider uppercase">visit</span>
                </a>
                    <div>
                        <Image 
                        src={carRental} 
                        alt="project image"
                        quality={100}
                        className="w-[100%] h-[12rem] rounded-t-2xl object-center"/>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-gray-700 rounded-b-2xl pb-4 ">
                        <h1 className="font-bold my-2">CAR RENTAL WEBSITE</h1>
                        <ul className="list-disc text-balance w-10/12 ">
                            <li>Responsive Design: The UI adapts fluidly to different screen sizes, ensuring a consistent user experience across devices such as desktops, tablets, and mobile phones.</li>
                        </ul>
                    </div>
            </div>
            <div className="w-[18rem] relative card hover:animate-pulse ">
                <a href="https://rentingcar.netlify.app/"
                className="anchor hidden absolute top-0 bottom-0  left-0 right-0 tracking-widest rounded-2xl bg-[#000000c3]  justify-center items-center font-extrabold text-2xl ">
                    Live &#160;<span className=" text-[#29dded] tracking-wider uppercase">visit</span>
                </a>
                    <div>
                        <Image 
                        src={carRental} 
                        alt="project image"
                        quality={100}
                        className="w-[100%] h-[12rem] rounded-t-2xl object-center"/>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-gray-700 rounded-b-2xl pb-4 ">
                        <h1 className="font-bold my-2">CAR RENTAL WEBSITE</h1>
                        <ul className="list-disc text-balance w-10/12 ">
                            <li>Responsive Design: The UI adapts fluidly to different screen sizes, ensuring a consistent user experience across devices such as desktops, tablets, and mobile phones.</li>
                        </ul>
                    </div>
            </div>
            <div className="w-[18rem] relative card hover:animate-pulse ">
                <a href="https://rentingcar.netlify.app/"
                className="anchor hidden absolute top-0 bottom-0  left-0 right-0 tracking-widest rounded-2xl bg-[#000000c3]  justify-center items-center font-extrabold text-2xl ">
                    Live &#160;<span className=" text-[#29dded] tracking-wider uppercase">visit</span>
                </a>
                    <div>
                        <Image 
                        src={carRental} 
                        alt="project image"
                        quality={100}
                        className="w-[100%] h-[12rem] rounded-t-2xl object-center"/>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-gray-700 rounded-b-2xl pb-4 ">
                        <h1 className="font-bold my-2">CAR RENTAL WEBSITE</h1>
                        <ul className="list-disc text-balance w-10/12 ">
                            <li>Responsive Design: The UI adapts fluidly to different screen sizes, ensuring a consistent user experience across devices such as desktops, tablets, and mobile phones.</li>
                        </ul>
                    </div>
            </div>
            
            
        </main>
    </section>
    </>
  )
};
