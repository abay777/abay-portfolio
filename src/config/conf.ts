 

// export type Conf =  {
//     appwriteURl:string;
//     appwriteProject:string;
// }

  const conf = {
    appwriteURl:String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProject:String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDB_Id:String(process.env.NEXT_PUBLIC_APPWRITE_DB_PROJECT_ID),
    appwriteCollection_Id:String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
    baseUrl:String(process.env.NEXT_PUBLIC_BASE_URI)
} 



export default conf