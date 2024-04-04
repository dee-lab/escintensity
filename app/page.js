import NavBar from "./ui/nav";
import Image from "next/image";
import Header from "./ui/header";
import Trainer from "./ui/trainers";
import ImageCarousel from "./ui/carousel";

export default function Home() {
  return (
    <>  
      <NavBar />
      <main>
        <Header />
        <div>
          <Trainer />
          <section className="bg-zinc-200 py-20"><ImageCarousel /></section>
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
          <section className="bg-teal-500 h-64 px-36">Subscribe to newsletter</section>
          <footer className="bg-zinc-950 h-64 px-36 text-white">Footer</footer>
        </div>
      </main>
    </>
  );
}



