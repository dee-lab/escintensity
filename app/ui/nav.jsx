'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from 'next/link'

import BurgerMenuIcon from '../toggle/ui/components/burger-menu';
import styles from "./styles";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderNavItem = (item) => {
    if (item.children) {
      return (
        <li key={item.label} className={`dropdown ${styles.navItem} relative inline-block`}>
          <button className="dropbtn flex items-center justify-between" onClick={handleClick} isOpen={isOpen}aria-haspopup="true" aria-expanded={isOpen}>
            {item.label}
            <span className={`material-symbols-outlined ${ isOpen ? '-rotate-180' : '-rotate-0' }`}>
              expand_more
            </span>
          </button>
          <ul className={`${ isOpen ? 'inline-block md:absolute' : 'hidden'} dropdown-content top-14 left-0`} isOpen={isOpen} aria-hidden={!isOpen}>
            {item.children.map((child) => (
              <li key={child.label} className={`${styles.navItem} bg-zinc-950`}>
                <Link href={child.link}>{child.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.label} className={`${styles.navItem}`}>
        <Link href={item.link}>{item.label}</Link>
      </li>
    );
  };


  return (
    <nav>
      <ul className={`${styles.navList}`}>
        {NAVITEMS.map(renderNavItem)}
      </ul>
    </nav>
  );
};

const NavBar = () => {

  return (
    <div className={`${styles.navBar} flex justify-between items-center`}>
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