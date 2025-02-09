import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma =  new PrismaClient();

export async function POST(req : any){
    try{
        const {userId , productId , quantity} = await req.json();

        if(!userId || !productId || !quantity){
            return {error: "please fill attributes"}
        }

        const product = await prisma.products.findUnique({
            where:{
                id: productId
            }
        })

        if(!product){
            return {error: "Product not found"}
        }

        const existingCart = await prisma.cart.findFirst({
            where:{
                userId,
                productId
            }
        })

        if(existingCart){
           await prisma.cart.update(
            {where:{
                id: existingCart.id
            },
            data:{
                 quantity : existingCart.quantity + quantity 
                } }

           )

           return NextResponse.json({success : true , message : "Product added sucessfully"}, {status: 200})
        }

        else{
            await prisma.cart.create({
                data:{
                    userId,
                    productId,
                    quantity
                }
            })

            return NextResponse.json({success : true , message : "Product added sucessfully"}, {status: 200})
        }




    } catch(error){

        console.error("Error in adding product to cart:", error);
        return {error: "error in adding the product to cart"}

    }
}


export async function DELETE(req : any){

    try{
        const {cartId} = await req.json();

        if(!cartId){
            return {error: "cart id is required"}
        }

        await prisma.cart.delete({
            where:{
                id: cartId
            }
        })

        return NextResponse.json({success : true , message : "Product removed sucessfully"}, {status: 200})
    }

    catch(error){ 
        console.error("Error in removing product from cart:", error);
        return {error: "error in removing the product from cart"}
     }

}