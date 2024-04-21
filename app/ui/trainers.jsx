import Image from "next/image";

const Trainers = () => {
  return (
    <div className="bg-zinc-300 py-20">
      <section className="bg-zinc-900 text-white rounded-3xl flex flex-col-reverse lg:flex-row justify-center items-center ms-auto me-auto" style={{width:'calc(100% - 5% - 5%)'}}>
      <Image
        className="img-trainers p-4 rounded-3xl mb-6 lg:mb-0" 
        src="/esc-trainers.png" 
        width={450} 
        height={450} 
        alt="ESC Trainers, Joel and Craig standing side by side" />
      <div className="flex flex-col text-center m-6 lg:mt-0">
        <h2 className="text-5xl my-5">Unleash Your Confidence & Transform Your Body</h2>
        <h3 className="text-4xl my-5">West London&apos;s Online Coaches</h3>
      </div>
      </section>
    </div>
  )
}

export default Trainers;