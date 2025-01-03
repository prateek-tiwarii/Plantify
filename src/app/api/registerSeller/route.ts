import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req : any ,) {


    try{

    const {name , email , password , phone , age , city} =   await req.body;


    if(!name || !email || !password  || !phone || !age || !city){
        return NextResponse.json({ 
          status: 400,
          error: "please fill all the fields" 
        }, { status: 400 });
      }
       

      const existingSeller = await prisma.seller.findUnique({
        where:{
            email
        }
      })

      if(existingSeller){
        return NextResponse.json({ 
          status: 400,
          error: "seller already exists" 
        }, { status: 400 });
      }


     
        const user = await prisma.seller.create({
            data: {
                name,
                email,
                phone,
                password,
                age,
                city
            }
        })

        return NextResponse.json({
            status: 200,
            message : "Seller created Sucessfully",
            user:{
            name: user.name,
            email: user.email,
            }
        },{status: 200})
     }
     catch(e){

        console.log(e)

        return NextResponse.json({
            status:500,
            error: "could not register the seller"
        },{status: 500})

     }

    }




