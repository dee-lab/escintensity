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

const NavItems = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center list-none m-0 px-0">
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
};

const styles = {navClasses: 'bg-zinc-950 text-white sticky top-0 z-10'}

const NavBar = () => {

  return (
    <>
      <div className={`navbar ${styles.navClasses} h-11 lg:hidden`}>
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