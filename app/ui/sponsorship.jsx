import Image from "next/image";

const Sponsorship = () => {
  return (
    <section className="bg-zinc-400 p-9 px-10 lg:px-40">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-5 pb-5">
        <Image src="/logo-liberty-supplements.png" 
          width={200} 
          height={200}
          alt="Liberty Supplements logo" 
          className="" />
        <Image src="/logo-power-stone.png" 
          width={200} 
          height={200}
          alt="Powerstone logo" 
          className="" />
          <Image src="/logo-source-performance.png" 
          width={200} 
          height={200}
          alt="Source Performance logo" 
          className="" />
      </div> 
    </section> 
  )
}

export default Sponsorship;