import Signup from './components/sign-up-form';
import Socials from './components/socials';

const Footer = () => {
  return (
   <footer className='flex flex-col md:flex-row justify-around md:items-end bg-zinc-950 p-9 px-10 lg:px-40 text-white'>
    <Signup label={"Be part of the ESC community:"} buttonText={"Sign up"} /> 
    <div className='flex flex-col flex-nowrap md:items-end gap-2'>
      <Socials />
      <div className='text-center md:text-left p-4 md:p-0 md:mt-0 border-t border-white/10 md:border-none'>
        Copyright © 2024 ESC Intensity
      </div>
    </div>
   </footer>
  )
}

export default Footer;