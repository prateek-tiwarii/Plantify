import { Button } from '@/components/ui/button'
import React from 'react'
import WobbleCardDemo from "@/_components/WobbleCardDemo"
import ProductGrid from '@/_components/ProductCrad'
import { MoveRight } from 'lucide-react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'


const LandingPage = () => {

  const words = [
    {
      text: "Bring",
    },
    {
      text: "Nature",
    },
    {
      text: "Home",
    },
    {
      text: "with",
    },
    {
      text: "Plantify.",
      className: "text-6xl font-bold max-w-2xl items-start",
    },
  ];
  return (
    <div >
      <div className= ' bg-[url("/bg.jpg")] bg-cover bg-center h-screen flex items-center justify-center flex-col ' >
      <div className="text-center text-black items-center flex flex-col ml-auto mr-0 gap-4">
      <TypewriterEffect words={words} />
  <h4 className="text-xl font-medium max-w-3xl">
    Discover a curated collection of vibrant plants, stylish pots, and expert care tips. Transform your space into a green sanctuary effortlessly!
  </h4>

  
<div className="text-center text-black items-center flex flex-row  gap-3">
  <Button className='bg-green-700 text-white text-lg rounded-lg'>Buy Now</Button>
  <Button className='bg-green-700 text-white text-lg rounded-lg'>Sell Now</Button>
</div>
</div>


      </div>

    <div className='flex flex-col items-start m-20 gap-4'>
      <h1 className='text-green-700 text-6xl font-bold max-w-44'>Featured Catogories</h1>
      <div className='flex flex-row justify-between items-center w-full'>
      <h4 className='text-gray-500 font-medium text-lg'> Curated collections to bring life and style to your space!</h4>
      <Button variant= "link"><span  className="text-green-700 font-medium text-lg flex flex-row gap-2 align-middle "> Shop the collection <MoveRight /></span></Button>
      </div>
      <WobbleCardDemo/>
    </div>
    

    <div className='flex flex-col items-start m-20 gap-4'>
    <h1 className='text-green-700 text-6xl font-bold '>Popular Products</h1>
    <div className='flex flex-row justify-between items-center w-full'>
      <h4 className='text-gray-500 font-medium text-lg'> Explore all products we offer from around the world</h4>
      <Button variant= "link"><span  className="text-green-700 font-medium text-lg flex flex-row gap-2 align-middle "> Shop the collection <MoveRight /></span></Button>

      <ProductGrid/>
      </div>
    </div>

   
    
    </div>
  )
}

export default LandingPage