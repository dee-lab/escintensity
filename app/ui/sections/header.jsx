import { useRouter } from 'next/navigation'
import { Button } from '../components/button';

const Header = () => {
  const router = useRouter()
  return (
    <header className="relative h-[480px] bg-right-top bg-[url('/fitness-500x510.jpg')] md:bg-[url('/fitness1080x450.png')] bg-cover bg-no-repeat grayscale-[90%]">          
      <section className="absolute text-white top-[20%] left-[10%] max-w-[700px]">
        <h1 className="text-7xl md:text-8xl">Every Session Counts</h1>
        <Button variant ="primary" size="md" className="mt-12 mb-8" onClick={() => router.push('/what-to-expect')}>
          <span>Start your journey</span>
        </Button> 
      </section>
    </header>
  )
}

export default Header;