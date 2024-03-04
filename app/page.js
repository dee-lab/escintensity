import NavBar from "./ui/nav";
import Header from "./ui/header";
import Trainer from "./ui/trainers";
import ImageCarousel from "./ui/carousel";

export default function Home() {
  return (
    <>  
      <NavBar />
      <main className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="w-full flex flex-col">
          <Trainer />
          <ImageCarousel />
          <section className="bg-teal-400 h-64 px-36">Sponsorship logos</section> 
          <section className="bg-teal-500 h-64 px-36">Subscribe to newsletter</section>
          <footer className="bg-zinc-950 h-64 px-36 text-white">Footer</footer>
        </div>
      </main>
    </>
  );
}



