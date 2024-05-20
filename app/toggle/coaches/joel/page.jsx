'use client'

import Image from "next/image";

export default function CoachJoel() {
  return (
    <main className="bg-zinc-100 py-12 text-zinc-900 text-center">
      {/* <header className="flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]">
        <h1 className="my-5">Joel (Syxx)</h1>
      </header> */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center ms-auto me-auto max-w-[80%]">
        <Image
          src="/Joel-transformation.jpg" 
          width={410} 
          height={410} 
          alt="An image of Joel's body transformation" />
        <div>
          <h1>I&#39;m Joel</h1>
          <h2 className="mb-4">also known as Syxx</h2>
          <p className=" text-2xl">Lifestyle Transformation Coach</p>
          <div className="py-8 lg:py-4 lg:px-20">
            <p className="text-xl leading-10">I&#39;m a level 3 personal trainer with over 17 years experience training and coaching a wide range of clients based on their specific fitness goals.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 rotate-2 h-16 -ml-2 -mt-3 lg:mt-0"></div>
      <div className="bg-zinc-800 -mt-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]">
          <Image
            src="/Joel-comp.jpg" 
            width={410} 
            height={546} 
            alt="An image of Joel, posing at his bodybuilding competition" />
          <div className="py-8 lg:*:px-16 text-xl leading-10 text-zinc-100">
            <p>I have gone through countless physique transformations myself including competitive bodybuilding. Due to this, not only do I understand your challenges that may come within your fitness journey; but more importantly, how to overcome them to achieve your desired result.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 rotate-2 h-16 -mt-[38px]"></div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]">
        <Image
          src="/Joel-coach.jpg" 
          width={410} 
          height={546} 
          alt="An image of Joel, also known as Syxx, one of the coaches" />
        <div className=" py-8 lg:*:px-16 text-xl leading-10">
          <p>Whether you&#39;re starting your journey or taking it to the next level, I believe with the right guidance, support and accountability, anyone can transform their physique whilst improving their physical and mental health.
          </p>
        </div>
      </div>
    </main>
  )
}