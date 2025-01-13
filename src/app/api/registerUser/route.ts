import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req : any,) {


    try{

    const {name , email , password } =   await req.body;


    if(!name || !email || !password  ){
        return NextResponse.json({ 
          status: 400,
          error: "please fill all the fields" 
        }, { status: 400 });
      }
       

      const existingUser = await prisma.users.findUnique({
        where:{
            email
        }
      })

      if(existingUser){
        return NextResponse.json({ 
          status: 400,
          error: "User already exists" 
        }, { status: 400 });
      }


     
        const user = await prisma.users.create({
            data: {
                name,
                email,
                
                password
            }
        })

        return NextResponse.json({
            status: 200,
            message : "User created Sucessfully",
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
            error: "could not register the user"
        },{status: 500})

     }

    }




