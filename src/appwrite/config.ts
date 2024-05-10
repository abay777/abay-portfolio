import conf from "@/config/conf";
import { Client, Account, ID } from "appwrite";
import React from "react";
import toast from "react-hot-toast";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUser = {
  email: string;
  password: string;
};
export const client = new Client();

const result = client.setEndpoint(conf.appwriteURl).setProject(conf.appwriteProject); // Replace with your project ID
export const account = new Account(client);
export { ID } from "appwrite";

class AppwriteService {
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return { email, password };
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async loginUser({ email, password }: LoginUser) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error: any) {
      console.log(error);
      throw Error(error);
    }
  }

  async logout() {
    try {
        return await account.deleteSession('current')
        
    } catch (error:any) {
        toast.error(error.message + 'while logging out')
    
        
    }
  }

  async isLoggedIn() {
    try {
     const data = await this.getCurrentUser();
     return Boolean(data)
     
      
    } catch (error:any) {
      toast.error(error.message + 'from isLoggedIn')
      
    }
    
  }

  async getCurrentUser () {
    try {
      return account.get()
      
    } catch (error:any) {
      toast.error('in getcurrent user' + error.message)
      throw Error(error)
      
    }
  }
}

export const appwriteService = new AppwriteService();
