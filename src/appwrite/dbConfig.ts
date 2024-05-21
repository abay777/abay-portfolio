import {  Databases, ID, Models,Query } from "appwrite";
import conf from "@/config/conf";
import { appwriteService, client } from "./config";
export interface CreateDB {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectPicture:string;
  projectGitLink:string;
  projectTechUsed:string;

}



const databases = new Databases(client  );

class AppwriteDbServices {
  async createDb({
    projectTitle,
    projectDescription,
    projectLink,
    projectGitLink,
    projectPicture,
    projectTechUsed
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
              projectGitLink:projectGitLink,
              projectTechUsed:projectTechUsed,
              projectPicture:projectPicture
            }
          );
         return response
        
    } catch (error:any) {
        throw Error(error.message)
        
    }
  }
  async getData (){
    try {
       
        const data = await databases.listDocuments(
         conf.appwriteDB_Id,
         conf.appwriteCollection_Id,
        [
          
        ]
      )
      return data
    } catch (error:any) {
      throw Error(error.message)
      
    }

  }
}

export const appwriteDbServices = new AppwriteDbServices();
