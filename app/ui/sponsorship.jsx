import Image from "next/image";

const Sponsorship = () => {
  return (
    <section className="bg-zinc-400 px-36 py-20">
      <div className="flex justify-center gap-8 pt-5 pb-5">
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