import Signup from './components/sign-up-form'

const Footer = () => {
  return (
   <footer className='flex flex-col-reverse md:flex-row justify-around md:items-end bg-zinc-950 p-9 px-10 lg:px-40 text-white'>
    <div className='p-4 mt-4 border-t border-white/10 md:border-none'>
      Copyright © 2024 ESC Intensity
    </div>
    <Signup  label={"Be part of the ESC community:"} buttonText={"Sign up"} /> 
   </footer>
  )
}

export default Footer;