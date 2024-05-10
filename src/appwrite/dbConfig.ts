import {  Databases, ID, Models } from "appwrite";
import conf from "@/config/conf";
import { client } from "./config";
export interface CreateDB {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectPicture?:File;
}



const databases = new Databases(client);

class AppwriteDbServices {
  async createDb({
    projectTitle,
    projectDescription,
    projectLink,
  }: CreateDB) {

    try {
        const response = await databases.createDocument(
            conf.appwriteDB_Id,
            conf.appwriteCollection_Id,
            ID.unique(),
            {
              projectTitle: projectTitle,
              projectDescription: projectDescription,
              projectLink: projectLink,
            }
          );
         return response
        
    } catch (error:any) {
        throw Error(error.message)
        
    }
  }
}

export const appwriteDbServices = new AppwriteDbServices();
