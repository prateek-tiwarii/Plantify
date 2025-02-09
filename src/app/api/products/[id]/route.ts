import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req : any, {params}:{params:{id:string}}) {
    try{
        const productID = parseInt(params.id);
        if(isNaN(productID)){
            return {error: "Invalid Product ID"}
        }
        const product = await prisma.products.findUnique({
            where:{
                id: productID
            }
        })

        if(!product){
            return {error: "Product not found"}
        }

        return NextResponse.json({success : true , product },{status: 200})
    } catch(error){
        console.error("Error in displaying product:", error);
        return {error: "error in displaying the particular product"}
    }

}