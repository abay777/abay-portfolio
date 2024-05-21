import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CreateDB, appwriteDbServices } from "@/appwrite/dbConfig";
import Image from "next/image";
import axios from "axios";
import { error, log } from "console";
import { json } from "stream/consumers";

export const AdminForm: React.FC = () => {
  const [imageFile, setImageFile] = useState<any>('');
  const [projectTitle, setProjectTitle] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [projectLink, setProjectLink] = useState<string>('');
  const [projectPicture, setProjectpicture] = useState<string>('');
  const [projectGitLink, setProjectGitLink] = useState<string>('');
  const [projectTechUsed, setProjectTechUsed] = useState<string>('');
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  // const imageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setImageFile(file);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setPreviewImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const imageUploadHandler = async () => {
    try {
      const newForm = new FormData();
      newForm.set("image", imageFile as any);
      console.log(newForm.get("image"));

      const response = await axios.post("/api/admin", newForm);
      if (response.status === 200) {
        toast.success("image uploaded");
      } else {
        throw Error("image upload failed");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      event.currentTarget.reset();
      const techUsedArray = projectTechUsed
        ?.split(",")
        .map((word) => word.trim());

      const reqForm = new FormData();
      reqForm.append("projectTitle", projectTitle as string);
      reqForm.append("projectDescription", projectDescription as string);
      reqForm.append("projectLink", projectLink as string);
      reqForm.append("projectPicture", projectPicture as any);
      reqForm.append("projectGitLink", projectGitLink as string);
      reqForm.append(
        "projectTechUsed",
        JSON.stringify(techUsedArray) as string
      );

      const req = Object.fromEntries(reqForm);
      let formValidation = false ;
      Object.values(req).forEach((value) => {
        if(value !=='' && value !== '[""]'){      
        }else{
          formValidation = true;   
        }
      });

      if(formValidation){
        throw new Error('fields cannot be empty')
      }
     
      const reqobj: CreateDB = {
        projectTitle: req.projectTitle as string,
        projectDescription: req.projectDescription as string,
        projectLink: req.projectLink as string,
        projectGitLink: req.projectGitLink as string,
        projectPicture: req.projectPicture as string,
        projectTechUsed: req.projectTechUsed as string,
      };

      const responseData = await appwriteDbServices.createDb(reqobj);
      if (responseData) {
        return toast.success(responseData.projectTitle);
      } else {
        console.log(responseData);
        throw Error("error in form submission ");
      }

      // setPreviewImage("");
      setImageFile(undefined);
      setProjectDescription("");
      setProjectLink("");
      setProjectTitle("");
      setProjectGitLink("");
      setProjectTechUsed("");
      setProjectpicture("");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md ">
      <h1 className="text-xl font-bold text-white capitalize dark:text-white">
        upload Projects
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="projectTitle"
            >
              projectTitle
            </label>
            <input
              id="projectTitle"
              type="text"
              value={projectTitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProjectTitle(e.currentTarget.value)
              }
              name="projectTitle"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="projectDescription"
            >
              projectDescription
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={projectDescription}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setProjectDescription(e.currentTarget.value)
              }
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          {/* <div className="mt-2">
            <label
              className="text-white dark:text-gray-200"
              htmlFor="projectPictures"
            >
              projectPicture
            </label>
            <input
              id="projectPictures"
              type="file"
              accept="image/*"
              name="projectPictures"
              className="  h-[5rem] w-[18rem] flex justify-start items-center  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={imageChangeHandler}
            />
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview"
                className="mt-2 w-1/2 inline rounded-xl"
                width={50}
                height={50}
              />
            )}
       

            <button
              onClick={imageUploadHandler}
              className="mt-5 px-6 block py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              upload
            </button>
          </div> */}
          <div className="mt-6">
            <label
              htmlFor="projectPicture"
              id="projectPicture"
              className="text-white dark:text-gray-200"
            >
              projectPicture url
            </label>
            <input
              type="text"
              name="projectPicture"
              value={projectPicture}
              onChange={(e)=>setProjectpicture(e.currentTarget.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="projectGitUrl"
              className="text-white dark:text-gray-200"
              id="projectGitUrl"
            >
              Github Link
            </label>
            <input
              type="text"
              name="projectGitUrl"
              value={projectGitLink}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e) => {
                setProjectGitLink(e.currentTarget.value);
              }}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="techused"
              id="techused"
              className="text-white dark:text-gray-200"
            >
              Tech used
            </label>
            <input
              type="text"
              name="techused"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              value={projectTechUsed}
              onChange={(e) => setProjectTechUsed(e.currentTarget.value)}
            />
          </div>
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="projectLink"
            >
              projectLInk
            </label>
            <input
              id="projectLink"
              type="projectLink"
              value={projectLink}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProjectLink(e.currentTarget.value)
              }
              name="projectLink"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 block py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
          <Toaster position="top-center" />
        </div>
      </form>
    </section>
  );
};
