import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CreateDB, appwriteDbServices } from "@/appwrite/dbConfig";
import Image from "next/image";
import axios from "axios";
import { log } from "console";

export const AdminForm: React.FC = () => {
  const [imageFile, setImageFile] = useState<any>();
  const [projectTitle, setProjectTitle] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const [projectLink, setProjectLink] = useState<string>();

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const imageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageUploadHandler = async () => {
    try {
      const newForm = new FormData();
      newForm.set("image", imageFile as any);
      console.log(newForm.get("image"));

      const response = await axios.post("/api/admin", newForm);
      if (response.status===200) {
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
      const formData = new FormData(event.currentTarget);
      let isFormEmpty = true;
      formData.forEach((value) => {
        if (value) {
          console.log(value);
          
          isFormEmpty = false;
        }
      });

      if (isFormEmpty) {
        throw new Error("Fill up all fields");
      }

      const projectPicture = formData.get("projectPicture") as File;
      if (!projectPicture) {
        throw Error("please upload project Picture");
        return null
      }else {
        event.currentTarget.reset()
       const reqForm = new FormData();
       reqForm.append('projectTitle',projectTitle as string)
       reqForm.append('projectDescription', projectDescription as string)
       reqForm.append('projectLink', projectLink as string)
       reqForm.append('projectPicture',imageFile as File)
       
        console.log(reqForm.get('projectPicture'))
        // const data-appwrite = await appwriteDbServices.createDb(filledForm)
        // if (data-appwrite!=undefined ) {
        //   toast.success( response.projectTitle)
        // }else{
        //   throw Error(response)
        // }
        const req = Object.fromEntries(reqForm)
        console.log(req,'this reqobj')
        const reqobj:CreateDB = {
          projectTitle: req.projectTitle as string,
          projectDescription: req.projectDescription as string,
          projectLink: req.projectLink as string
        }
  
        
          const responseData = await appwriteDbServices.createDb(reqobj)
          if(responseData){
           return toast.success(responseData.projectTitle)
          }else{
           console.log(responseData)
           throw Error('error in form submission ')
          }
        
  
        setPreviewImage('');
        setImageFile(undefined)
        setProjectDescription('')
        setProjectLink('')
        setProjectTitle('')
      }

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
              onChange={(e:ChangeEvent<HTMLInputElement>)=>setProjectTitle(e.currentTarget.value)}
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
              onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setProjectDescription(e.currentTarget.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-2">
            <label
              className="text-white dark:text-gray-200"
              htmlFor="projectPicture"
            >
              projectPicture
            </label>
            <input
              id="projectPicture"
              type="file"
              accept="image/*"
              name="projectPicture"
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
              onChange={(e:ChangeEvent<HTMLInputElement>)=>setProjectLink(e.currentTarget.value)}
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
          <Toaster />
        </div>
      </form>
    </section>
  );
};
