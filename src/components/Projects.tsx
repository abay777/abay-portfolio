import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { appwriteDbServices } from "@/appwrite/dbConfig";
import { GoLinkExternal } from "react-icons/go";
import { useAuth } from "@/context/UseAuth";
import { appwriteService } from "@/appwrite/config";

export const Projects: React.FC = () => {
  const {authStatus, setAuthStatus} = useAuth()
  const [dbData, setDbData] = useState<any>([]);
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
   
    const data = appwriteDbServices.getData();
    data.then((response: any) => {
      setDbData(response.documents);
    })
    .finally(()=>{
      setLoader(false)
    })
    
  }, []);
  return (
    <>
      <section id="projects">
        <h1 className=" mt-36 text-center font-bold text-2xl tracking-widest">
          MY Projects ❤️
        </h1>
        {loader ? (
         <div className="loader mx-auto mt-10"></div>

        ) : (
        <main className="mt-20 flex md:flex-row md:flex-wrap flex-col justify-center items-center gap-10">
            {dbData.map((project:any,index:number)=>{
               return( index % 2 ===0 ? (
                    <section key={index} className="flex flex-col-reverse lg:flex-row justify-center items-start  mx-10  gap-4">
                    <div className="flex-1 flex flex-col justify-center items-center gap-10">
                        <h1 className=" font-semibold text-base lg:text-xl text-center">
                         {project.projectTitle}
                        </h1>
                        <p className="m-0 text-gray-500 w-full text-center">{
                            project.projectDescription
                        }
                        </p>
                        <div className="font-bold text-base flex justify-center items-center gap-5">
                        {  JSON.parse(project.projectTechUsed).map((tech:any,index:number)=>{
                          return( <p key={index}>{tech} </p>
                        )})}
                
                         
                        </div>
                        <div className="flex items-center justify-between gap-14">
                            <a href={project.projectGitLink} className="flex gap-4 font-semibold hover:text-blue-500">
                                code<FaGithub size={30} color="gray"/>
                            </a>
                            <a href={project.projectLink} className="flex gap-4 font-semibold hover:text-blue-500">
                                Live <GoLinkExternal size={30} color="gray" />
                            </a>
                        </div>
                      </div>
                      <div className="lg:flex-1 flex items-center justify-center w-full  lg:mx-0">
                        <Image
                          src={project.projectPicture}
                          alt="projecttitle"
                          width={500}
                          height={500}
                          quality={100}
                          className="w-full  lg:w-[90%] lg:h-[20rem]  rounded-sm  object-fill  lg:object-cover lg:ml-12 "
                        />
                      </div>
             
          
                    </section>

                ):(
                    <section key={index} className="flex justify-center items-start gap-4 mx-10 mt-20 ">
            <div className="flex-1">
              <Image
                src={project.projectPicture}
                alt="projecttitle"
                width={500}
                height={500}
                quality={100}
                className="w-full  lg:w-[90%] lg:h-[20rem]  rounded-sm  object-fill  lg:object-cover lg:ml-12 "
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10">
              <h1 className=" font-semibold text-xl">
                {project.projectTitle}
              </h1>
              <p className="m-0 text-gray-500">
              {project.projectDescription}
              </p>
              <div className="font-bold text-base flex justify-center items-center gap-5">
              {  JSON.parse(project.projectTechUsed).map((tech:any,index:number)=>{
               return( <p key={index} >{tech} </p>
                )})}
                
              </div>
              <div className="flex items-center justify-between gap-14">
                <a href={project.projectGitLink} className="flex gap-4 font-semibold hover:text-blue-500">
                    code<FaGithub size={30} color="gray"/>
                </a>
                <a href={project.projectLink} className="flex gap-4 font-semibold hover:text-blue-500">
                    Live <GoLinkExternal size={30} color="gray" />
                </a>
            </div> 
            </div>
          </section>

                )
)
            })}
          
         
        </main>

        )}
      </section>
    </>
  );
};
