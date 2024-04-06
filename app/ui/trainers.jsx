import Image from "next/image";

const Trainers = () => {
  return (
    <section className="bg-zinc-300 flex flex-col lg:flex-row items-center p-9 px-10 lg:px-40 text-black">
      <Image 
        src="/esc-trainers.png" 
        width={450} 
        height={450} 
        alt="ESC Trainers, Joel and Craig standing side by side" 
        className="" />
      <div className="flex flex-col text-center lg:text-left lg:ml-6">
        <h2 className="text-4xl sm:text-6xl my-5">Nulla consectetur</h2>
        <p className="text-xl">Cupidatat minim Lorem cupidatat sint esse adipisicing laborum minim cillum aute aute nulla eiusmod voluptate. Aliqua ut occaecat sit non voluptate amet et ex adipisicing eiusmod aliqua cillum nostrud. Amet tempor aliquip ullamco sit ea incididunt esse. Amet reprehenderit duis adipisicing non enim dolore aliqua duis aliquip aliqua pariatur. Aute id aute elit excepteur esse. Anim ea consectetur do labore ea incididunt qui amet. Adipisicing fugiat sunt excepteur minim.</p>
      </div>
    </section>
  )
}

export default Trainers;