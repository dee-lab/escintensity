'use client'

import Image from "next/image";
import CLIENTS from "./client-data";

const ClientTestimonials = () => {
  return (
    <>
      {CLIENTS.map((client, index) => {
        return ( 
          <section key={index} className="bg-neutral-50 flex flex-col md:flex-row md:odd:flex-row-reverse justify-center items-center gap-8 py-8 odd:bg-zinc-100 text-justify *:grow *:shrink *:basis-1/2 *:max-w-96 *:min-w-96">
            <Image
              src={client.image}
              alt={`Client testimonial from ${client.name}`}
              height={300}
              width={300}
            />
            <div>
              <q className="italic">{client.testimonial}</q>
              <p className="pt-2 font-semibold">{client.name}</p>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default ClientTestimonials;