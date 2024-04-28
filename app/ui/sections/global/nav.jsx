'use client'

import {useEffect} from "react";

import BurgerMenuIcon from '../../components/burger-menu';


const NAVITEMS = [
  {label: "Home", link: "/",},
  {label: "What to expect", link: "./what-to-expect"},
  {label: "Services", link: "./services"},
  {label: "Who we are", link: "./who-we-are"},
  {label: "Testimonials", link: "./testimonials"},     
  {label: "Get in touch", link: "./get-in-touch"},  
  // {label: "Free Downloads", link: "./downloads"},
  // {label: "Merch", link: "./merch"},
  // {label: "Podcast", link: "./podcast"},
];

const NavItems = () => {
  
  const modifiedNavItems = NAVITEMS.map(item => {
    // Create a new object with modified link
    return { ...item, link: item.link.substring(1) };
  });

  useEffect(() => {

    const currentUrl = window.location.pathname; // Get current URL path
    const links = document.querySelectorAll('nav ul li a'); // Get list of links from nav

    // if (linkText === currentURL) {
    //   link.parentNode.classList.add('active');
    // }
    
    // const matchingNavItem = modifiedNavItems.find(item => {
      // Remove trailing slash from both link and currentUrl for comparison
      links.forEach(link => {
        const href = link.getAttribute('href');
        // Extract text without extension
        const itemLink = href.endsWith("./") ? href.slice(0, -1) : link; 
        // const trimmedUrl = currentUrl.endsWith("/") ? currentUrl.slice(0, -1) : currentUrl;

        // if(trimmedUrl === itemLink) {
        //   console.log('itemLink:', itemLink, 'trimmedUrl:', trimmedUrl)
        // }
        console.log('href:', href, 'itemLink:', itemLink)
      }) 
    // });

    

    // if (matchingNavItem) {
    //   console.log(matchingNavItem.link)
    //   console.log(matchingNavItem)
    //   // link.parentNode.classList.add('active');
    // }
  }, [modifiedNavItems]);

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center list-none m-0 px-0">
        {NAVITEMS.map((navItem, index) => {
          return (
          <li key={index} className="uppercase py-4 px-4 no-underline hover:bg-red-800 hover:cursor-pointer active:bg-red-800">
            <a href={navItem.link}>{navItem.label}</a>
          </li>
          )            
        })}
      </ul>
    </nav>
  )
};

const styles = {navClasses: 'bg-zinc-950 text-white sticky top-0 z-10'}

const NavBar = () => {

  return (
    <>
      <div className={`navbar ${styles.navClasses} h-14 lg:hidden`}>
        <BurgerMenuIcon />
        <section className='navScreen'>
          <NavItems />
        </section>
      </div>
      <div className={`${styles.navClasses} hidden lg:block`}>
        <NavItems/>
      </div>
    </>
  )  
};

export default NavBar;