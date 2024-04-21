import { Button } from '../components/button';

const Contact = () => {
  return (
    <section className="bg-zinc-300 py-16">
      <div className="flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]">
        <h3 className="text-4xl my-5">Do you dream of a healthier, stronger you but lack the guidance to get there?</h3>
        <Button type="primary" size="md">
          <span>Get in touch</span>
        </Button>        
      </div>
    </section>
  )
}

export default Contact;