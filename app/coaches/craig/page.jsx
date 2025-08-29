'use client'

import Image from "next/image";

export default function CoachCraig() {
  return (
    <main className="bg-zinc-100 py-16">
      <header className="flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]">
        <h1 className="my-5">Craig</h1>
      </header>
      <div className="flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]">
       <div className="flex flex-wrap justify-center items-center gap-8 *:shrink *:grow *:basis-1/2 *:max-w-[350px]">
        <Image
            src="/Craig.png" 
            width={350} 
            height={450} 
          alt="An image of Craig, one of the coaches" />  
        </div>
      </div>
    </main>
  )
}