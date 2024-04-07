import {Input} from './components/input'

const Footer = () => {
  return (
   <div className='flex flex-col-reverse	md:flex-row justify-between gap-16 md:items-end bg-zinc-950 p-9 px-10 lg:px-40 text-white'>
     <footer>
      Copyright © 2024 ESC Intensity
    </footer>
    <Input/>
   </div>
  )
}

export default Footer;