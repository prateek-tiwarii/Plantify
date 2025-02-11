import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any) {

  try{
    const session =  await auth();

    if(!session){
        return NextResponse.json({error: "Unauthorized"})
    }

    else{
        const userId = session.user.id;


        const {productId , quantity} = await req.json();

        if(!productId || !quantity){
            return NextResponse.json({error: "please fill attributes"}) 
        }

        const exist = await prisma.cart.findFirst({
            where:{
                userId,
                productId
            }
        })

        if(!exist){
            return NextResponse.json({message: "Product not found in the cart", status: 404})
        }

        else{
           const order =  await prisma.orders.create({
                data:{
                    userId,
                    productId,
                    quantity
                }
            })

            await prisma.cart.delete({
                where:{
                    id: exist.id
                }
            })

            return NextResponse.json({success : true , order}, {status: 200})


        }
    }
}
    catch(e){
        console.log(e)
        return NextResponse.json({error: "could not add product tok the cart "})
    }


}