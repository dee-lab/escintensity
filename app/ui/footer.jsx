import {Input} from './components/input'

const Footer = () => {
  return (
   <div className='flex flex-col-reverse md:flex-row justify-between gap-14 md:items-end bg-zinc-950 p-9 px-10 lg:px-40 text-white'>
     <footer className='p-4 mt-4 border-t border-white/10'>
      Copyright © 2024 ESC Intensity
    </footer>
    <Input /> 
   </div>
  )
}

export default Footer;