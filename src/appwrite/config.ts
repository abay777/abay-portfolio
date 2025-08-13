import conf from "@/config/conf";
import { Client, Account, ID, Models, AppwriteException } from "appwrite";
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

interface isVerified {
  userId:string;
  secret:string;
}
export const client = new Client();

const result = client
  .setEndpoint(conf.appwriteURl)
  .setProject(conf.appwriteProject); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

class AppwriteService {
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const currentUser = await this.isLoggedIn();
      if(currentUser) {
        await this.logout()
      }
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        this.GetVerified()
        return { email, password };
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async anonymousUser (){
    try {
      const data = account.createAnonymousSession()
      return data
    } catch (error:any) {
      throw Error(error.message + 'this is from anonymous user')
      
    }
  }

  async loginUser({ email, password }: LoginUser) {
    try {
      const currentUser = await this.getCurrentUser;
      if(Boolean(currentUser)) {
        await this.logout()
      }
      const result = await account.createEmailSession(email, password);
      
      return result

    } catch (error: any) {
      console.log(error);
      throw Error(error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error: any) {
      toast.error(error.message + "while logging out");
    }
  }

  async GetVerified() {
    await account.createVerification(`${conf.baseUrl}/login/verify`)
  }

  async isVerified({userId,secret}:isVerified){
    try {
      const result = await account.updateVerification(userId,secret)
      console.log(result,'isVerified')
      return result
    } catch (error) {
      console.error(error,"from the verfiication")
      return false
    }

  }

  async isLoggedIn() {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data)

    } catch (error: any) {
      toast.error(error.message + "from isLoggedIn");
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    }catch (error: any) {
      if (error instanceof AppwriteException) {
        // Handle specific AppwriteException here
        if (error.code === 401) {
          // Handle unauthorized access (e.g., user not logged in)
          return false;
        }
      }else{
        console.error("Error checking admin role:", error.message);
        throw error; // Re-throw the error to propagate it to the caller
      }
    }
  }

  async checkAdmin () {
    try {
      const user:Models.User<Models.Preferences> | any  = await this.getCurrentUser()
      if(user.$id) {
        const roles = user.labels;
        if(roles.includes('admin')){
          return true
        }else {
          return false
        }
        
      }

    } 
      catch (error: any) {
        throw Error(error.message)

      }
      
    
  }
}

export const appwriteService = new AppwriteService();
