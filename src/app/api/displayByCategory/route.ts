import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET(req : any,) {
try {
    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');



    const products = await prisma.products.findMany({
        where: category ? { category } : {}, 
      });

        return {success : true , products }
    } catch (error) {
        console.error("Error in displaying products:", error);
        return { error: "Internal Server Error" };
      }
    
 } 