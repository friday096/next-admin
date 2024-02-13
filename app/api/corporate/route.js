import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function GET(){
    try{

    }catch(error){
        throw new Error(error)
    }
    return NextResponse.json({message:"success"})
}