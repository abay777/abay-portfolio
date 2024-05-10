import { CreateDB } from "@/appwrite/dbConfig";
import { appwriteDbServices } from "@/appwrite/dbConfig";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json() as any;
    delete reqBody.projectPicture;
    console.log(reqBody);


    

  
   

    return NextResponse.json({
      message: 'success',
      success: true,
      
    });
  } catch (error: any) {
    NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
