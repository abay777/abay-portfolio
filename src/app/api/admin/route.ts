import { CreateDB } from "@/appwrite/dbConfig";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json() as any;
    console.log(reqBody);
    

    

    // const response = await appwriteDbServices.createDb(filledForm)
    // if (response!=undefined ) {
    //   toast.success( response.projectTitle)
    // }

    return NextResponse.json({
      message: "recieved succefully",
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
