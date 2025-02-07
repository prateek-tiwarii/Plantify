import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req : any,) {

    try{

       const session = await auth();

       if(!session){
           return NextResponse.json({
               status: 401,
               error: "Unauthorized"
           },{status: 401});

        }

        const{name , price , description , category , image , quantity} = req.json();
        
        if(!name || !price || !description || !category || !image || !quantity){
            return NextResponse.json({
                status: 400,
                error: "please fill all the fields"
            },{status: 400});
        }


        const seller = await prisma.seller.findUnique({
            where: { email: session.user.email },
          });
      
          if (!seller) {
            return NextResponse.json({ error: "Seller not found" }, { status: 404 });
          }

          const product = await prisma.products.create({
            data: {
              name,
              price : parseFloat(price),
              description,
              category,
              image,
              quantity : parseInt(quantity),
              sellerId: seller.id,
            }
           });
      
            return NextResponse.json({success : true , product }, { status: 200 });

 }catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}