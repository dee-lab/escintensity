import Image from "next/image";
import { Button } from '../components/button';

const CoachSection = () => {
  return (
    <div className="bg-neutral-50 py-20">
      <section className="bg-zinc-900 text-white rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center ms-auto me-auto max-w-[80%]">
        <Image
          className="rounded-3xl grow shrink basis-1/3 md:w-full px-8 pb-8 lg:p-8" 
          src="/esc-trainers.png" 
          width={450} 
          height={450} 
          alt="ESC coaches, Joel and Craig standing side by side" />
        <div className="grow shrink basis-2/3 flex flex-col align-center text-center px-4 py-8 lg:p-0 lg:pr-8">
          <h2 className="text-2xl md:text-5xl m-2 lg:m-6 pb-4">Unleash Your Confidence & Transform Your Body</h2>
          <h3 className="text-lg md:text-4xl m-2 lg:m-6 uppercase">West London&apos;s Online Coaches</h3>
          <Button className="mt-12 mb-8" type="secondary" size="md">
            <span>Find out more</span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CoachSection;