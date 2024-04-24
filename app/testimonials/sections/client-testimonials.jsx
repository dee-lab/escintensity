'use client'

import Image from "next/image";
import CLIENTS from "./client-data";

const ClientTestimonials = () => {
  return (
    <section className="bg-white py-16">
      {CLIENTS.map((client, index) => {
        return ( 
          <section key={index} className="flex flex-wrap *:grow *:shrink *:basis-1/2 gap-4 *:text-center *:p-2 *:max-w-96 *:min-w-96">
            <Image
              src={client.image}
              alt={`Client testimonial from ${client.name}`}
              height={300}
              width={300}
            />
            <p>{client.testimonial}</p>
          </section>
        )
      })}
    </section>
  )
}

export default ClientTestimonials;