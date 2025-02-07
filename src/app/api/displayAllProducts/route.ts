import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';





const prisma = new PrismaClient();

export async function GET(req : any,) {
    try{
        const products = await prisma.products.findMany({

            where:{
                quantity:{
                    not:0
                }
            }
        })

        return NextResponse.json({success : true , products }, { status: 200 })
    } catch (error) {
        console.error("Error in displaying products:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
}