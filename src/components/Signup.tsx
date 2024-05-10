import React from "react";
import { useAuth } from "@/context/UseAuth";
import { useState } from "react";
import { FormEvent } from "react";
import { appwriteService } from "@/appwrite/config";
import { create } from "domain";
import { useRouter } from "next/navigation";
import toast,{Toaster} from "react-hot-toast";

type User = {
  username: string;
  email: string;
  password: string;
  cpassword: string;
};

export const Signup = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const [formDetails, setFormDetails] = useState<User | undefined | any>();
  const [checkFields, setCheckFields] = useState(false);

  const handleForm = async (e: FormEvent) => {
    console.log(e);
    
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const user = Object.fromEntries(formData);

      if (user?.password != user?.cpassword) {
        setCheckFields(true);
      } else {
        setCheckFields(false);
        setFormDetails(user);
        const userDetails = {
          email: formDetails?.email,
          password: formDetails?.password,
          name: formDetails.username,
        };
        const createdUser = await appwriteService.createUserAccount(
          userDetails
        );
        if (createdUser) {
          toast.success(`${createdUser.email} your account has been successfully created`,{
              position:'bottom-center'
            
          })
          setAuthStatus(true);
          router.push("/login");
        }

        const form = e.target as HTMLFormElement;
        form.reset()
        setFormDetails(undefined)
      }
      console.log(user);
    } catch (error: any) {
      toast.error(error.message)
    }

    //  console.log(form)
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto mt-10">
        <form
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleForm}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="abcd@sdj.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              className="shadow appearance-none border  border-[#2c3c5b] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
            <p
              className={
                checkFields ? "text-red-500 text-xs italic " : "hidden"
              }
            >
              password field must be same.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cpassword"
            >
              Password
            </label>
            <input
              required
              className="shadow appearance-none border border-[#2c3c5b]  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cpassword"
              type="password"
              name="cpassword"
              placeholder="******************"
            />
            <p
              className={
                checkFields ? "text-red-500 text-xs italic " : "hidden"
              }
            >
              password field must be same.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <Toaster/>
    </>
  );
};
