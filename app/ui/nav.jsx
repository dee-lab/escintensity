'use client'

import {useState} from "react";
import Image from "next/image";
import Link from 'next/link'

import BurgerMenuIcon from '../toggle/ui/components/burger-menu';

const NAVITEMS = [
  {label: "Home", link: "/toggle",},
  {label: "What to expect", link: "./what-to-expect"},
  {label: "Services", link: "./services"},
  {
    label: "Who we are", 
    link: "./contact", 
    children: [
      {label: "Coach Joel", link: "./coach/joel",},
      {label: "Coach Craig", link: "./coach/craig"}
    ]
  },
  {label: "Testimonials", link: "./testimonials"},     
  {label: "Get in touch", link: "./contact"},  
  // {label: "Free Downloads", link: "./downloads"},
  // {label: "Merch", link: "./merch"},
  // {label: "Podcast", link: "./podcast"},
];


const NavItems = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = (event) => {
    event.stopPropagation();
    setIsActive(true)    
  };
  const handleMouseLeave = () => setIsActive(false);

  const renderNavItem = (item) => {
    if (item.children) {
      return (
        <li key={item.label} className="dropdown uppercase py-4 px-4 no-underline hover:bg-red-800 hover:cursor-pointer active:bg-red-800">
          <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-expanded={isActive}
          >
            {item.label}
          </button>
          {isActive && (
            <ul className="dropdown-content">
              {item.children.map((child) => (
                <li key={child.label}>
                  <Link href={child.link}>{child.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.label} className="uppercase py-4 px-4 no-underline hover:bg-red-800 hover:cursor-pointer active:bg-red-800">
        <Link href={item.link}>{item.label}</Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="nav-list flex flex-col lg:flex-row lg:justify-end lg:items-center list-none m-0 px-0">
        {NAVITEMS.map(renderNavItem)}
      </ul>
    </nav>
  );
};

const styles = {navClasses: 'bg-zinc-950 text-white sticky top-0 z-10'}

const NavBar = () => {

  return (
    <div className={`${styles.navClasses} flex justify-between items-center`}>
      <Image 
        src="/logo-white.png"
        width={60}
        height={60}
        alt="ESC Intensity logo"
        className="pl-2 block lg:hidden"
      />
      <Image 
        src="/logo-white.png"
        width={100}
        height={100}
        alt="ESC Intensity logo"
        className="pl-2 hidden lg:block"
      />
      <div className="navbar h-14 lg:hidden">
        <BurgerMenuIcon />
        <section className='navScreen'>
          <NavItems />
        </section>
      </div>
      <div className="hidden lg:block">
        <NavItems/>
      </div>
    </div>
  )  
};

export default NavBar;