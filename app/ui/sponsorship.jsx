import Image from "next/image";

const Sponsorship = () => {
  return (
    <div className="bg-zinc-300 pt-[5%] pb-[5%]">
      <section className="bg-zinc-900 ms-auto me-auto rounded-3xl w-fit">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4">
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
    </div>
  )
}

export default Sponsorship;