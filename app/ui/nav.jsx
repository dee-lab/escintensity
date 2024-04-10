import BurgerMenuIcon from './components/burger-menu';

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
        <nav className="main-nav bg-zinc-950 text-white sticky top-0 z-10 ">
            <BurgerMenuIcon />
            <ul className="flex justify-end items-center list-none m-0 px-0">
                {NAVITEMS.map((navItem, index) => {
                    return (
                    <li key={index} className="uppercase py-3.5 px-4 no-underline hover:bg-red-800 hover:cursor-pointer">
                        <a href={navItem.link}>{navItem.label}</a>
                    </li>
                    )            
                })}
            </ul>
        </nav>
    )
}

export default NavBar;