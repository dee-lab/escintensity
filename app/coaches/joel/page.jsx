'use client'

import Image from "next/image";

export default function CoachJoel() {
  return (
    <main className="bg-zinc-100 py-12 text-zinc-900 text-center">
      {/* slice */}
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
            <p className="text-xl leading-8">I&#39;m a level 3 personal trainer with over 17 years experience training and coaching a wide range of clients based on their specific fitness goals.
            </p>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="bg-zinc-800 rotate-2 h-16 -ml-2 -mt-3 lg:mt-0"></div>
      {/* slice */}
      <div className="bg-zinc-800 -mt-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]">
          <Image
            src="/Joel-comp.jpg" 
            width={410} 
            height={546} 
            alt="An image of Joel, posing at his bodybuilding competition" />
          <div className="py-8 lg:*:px-16 text-xl leading-10 text-neutral-50">
            <p>I have gone through countless physique transformations myself including competitive bodybuilding. Due to this, not only do I understand your challenges that may come within your fitness journey; but more importantly, how to overcome them to achieve your desired result.
            </p>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="bg-zinc-100 rotate-2 h-16 -mt-[38px]"></div>
      {/* slice */}
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
      {/* line */}
      <div className="bg-zinc-800 rotate-2 h-16 -ml-2 mt-16"></div>
      {/* slice */}
      <div className="bg-zinc-800 -mt-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]">
          <div className="py-16 text-xl leading-10 text-neutral-50">
            <span className="material-symbols-outlined text-4xl">stack_star</span>
            <h3 className="text-xl font-medium uppercase pb-4">specialist areas</h3>
            <p className="hidden lg:inline">
              Body fat reduction | Muscular development | Bodybuilding | Lifestyle coaching | Online coaching | Tailored nutrition plans
            </p>
            <ul className="*:list-none lg:hidden leading-8">
              <li>Body fat reduction</li>
              <li>Muscular development</li>
              <li>Bodybuilding</li>
              <li>Lifestyle coaching</li>
              <li>Online coaching</li>
              <li>Tailored nutrition plans</li>
            </ul>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="bg-zinc-800 rotate-2 h-16 -mt-8"></div>
      {/* slice */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch *:grow *:shrink *:basis-20 gap-8 pt-20 ms-auto me-auto max-w-[80%] *:bg-zinc-800 *:text-center *:text-neutral-50 *:flex *:flex-col *:gap-4 *:justify-between *:p-8 *:max-w-[640px] *:min-w-2/5">
        {/* Box 1 */}
        <div className="text-xl leading-10">
          <blockquote className="text-left italic">&quot;Syxx has been pivotal to the way that I have not only changed and made my body healthier, but also the way that I now look at fitness and nutrition.&quot;
          </blockquote>
          <p className="text-right">- Ludwig A.</p>
        </div>

        {/* Box 2 */}
        <div className="text-xl leading-10">
          <blockquote className="text-left italic">&quot;Signing up with Syxx was the best decision I could have made for my fitness goals.&quot;
          </blockquote>
          <p className="text-right">- Sarah King</p>
        </div>

      </div>
    </main>
  )
}