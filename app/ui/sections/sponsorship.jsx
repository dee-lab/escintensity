import Image from "next/image";

const Sponsorship = () => {
  return (
    <section className="bg-zinc-900 pt-12 pb-14 flex flex-col gap-8">
      <h3 className="text-4xl text-center text-white my-4 uppercase">Sponsors</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 p-4 *:shrink *:grow *:basis-52 *:max-w-52">
        <Image src="/logo-liberty-supplements.png" 
          width={200} 
          height={200}
          alt="Liberty Supplements logo" 
          className="image" />
        <Image src="/logo-power-stone.png" 
          width={200} 
          height={200}
          alt="Powerstone logo" 
          className="image" />
        <Image src="/logo-source-performance.png" 
          width={200} 
          height={200}
          alt="Source Performance logo" 
          className="image" />
      </div> 
    </section> 
  )
}

export default Sponsorship;