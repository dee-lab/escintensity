import Image from "next/image";

const Trainers = () => {
  return (
    <div className="bg-zinc-300 py-20">
      <section className="bg-zinc-900 text-white rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center ms-auto me-auto max-w-[80%]">
        <Image
          className="rounded-3xl grow shrink basis-1/3 md:w-full px-8 pb-8 lg:p-8" 
          src="/esc-trainers.png" 
          width={450} 
          height={450} 
          alt="ESC Trainers, Joel and Craig standing side by side" />
        <div className="grow shrink basis-2/3 text-center px-4 py-8 lg:p-0">
          <h2 className="text-2xl md:text-5xl m-2 lg:m-6 pb-4">Unleash Your Confidence & Transform Your Body</h2>
          <h3 className="text-lg md:text-4xl m-2 lg:m-6">West London&apos;s Online Coaches</h3>
        </div>
      </section>
    </div>
  )
}

export default Trainers;