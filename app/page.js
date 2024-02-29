import Image from "next/image";

const NAVITEMS = [
  {"label": "Home", "link": "./", "active": true},
  {"label": "What to expect", "link": "./what-to-expect"},
  {"label": "Coaching Services", "link": "./coaching-services"},
  {"label": "Who we are", "link": "./who-we-are"},
  {"label": "Testimonials", "link": "./testimonials"},     
  {"label": "Contact", "link": "./contact"},  
  // {"label": "Free Downloads", "link": "./downloads"},
  // {"label": "Merch", "link": "./merch"},
  // {"label": "Podcast", "link": "./podcast"},
];

const NavBar = () => {
 return (
  <nav class="main-nav bg-black text-white sticky top-0">
    <ul class="flex justify-end items-center list-none m-0 px-0">
        {NAVITEMS.map((navItem, index) => {
          return (
            <li key={index} class="py-3.5 px-4 no-underline hover:bg-esc-red hover:cursor-pointer">
              <a href={navItem.link} class="block w-full h-full">{navItem.label}</a>
            </li>
          )            
        })}
    </ul>
  </nav>
 )
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header>Banner- with strap line</header>
        <section>Intro who I am, what I can offer</section>
        <section>Before and after pictures</section>
        <section>Sponsorship logos</section>
        <section>Subscribe to newsletter</section>
        <footer>Footer</footer>
      </main>
    </>
  );
}



