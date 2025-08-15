import { ID, Storage } from "appwrite";
import { client } from "./config";
import conf from "@/config/conf";

const storage = new Storage(client);

class AppwriteStorageServices {

    async uploadFile(picture:any){
        try {
            const file = await storage.createFile(
            conf.appwirte_Bucket_Id,
            ID.unique(),
            picture
        )
        return file.$id
        } catch (error) {
            console.log(error);
        }
    }
    async getFile(fileId:string){
        const fileurl = await storage.getFileView

    }

}