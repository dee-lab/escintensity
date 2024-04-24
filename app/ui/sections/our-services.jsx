const OurServicesSection = () => {
  return (
    <section className="bg-zinc-900 py-20 [&_h3]:uppercase">
      <h2 className="text-5xl text-center text-white pb-8 uppercase">Our Services</h2>
      <div className="flex flex-wrap justify-center *:grow *:shrink *:basis-20 gap-8 pt-6 pb-6 ms-auto me-auto text-zinc-900 *:text-center  *:bg-neutral-50 *:rounded-3xl *:flex *:flex-col  *:gap-4 *:p-8 *:max-w-80 *:min-w-80">

        {/* Box 1 */}
        <div>
          <span className="material-symbols-outlined text-4xl">exercise</span>
          <h3 className="text-xl leading-none font-medium">Personal Training</h3>
          <h4 className="leading-none font-medium uppercase">West London Based</h4>
          <p>Your trainer becomes your partner in achieving your goals. Providing constant motivation, guidance, and adjustments to keep you progressing.</p>
        </div> 

        {/* Box 2 */}
        <div>
          <span className="material-symbols-outlined text-4xl">smartphone</span>
          <h3 className="text-xl font-medium">Online Coaching</h3>
          <p>We design workout programs tailored to your unique needs, fitness level, and goals. Whether you want to lose weight, gain muscle, improve strength, or increase endurance, we have a plan for you.</p>
        </div>

        {/* Box 3 */}
        <div>
          <span className="material-symbols-outlined text-4xl">groups</span>
          <h3 className="text-xl font-medium">ESC Community</h3>
          <p>Our online community provides ongoing support and motivation throughout your journey.</p>
        </div> 

      </div>
    </section>
  )
}

export default OurServicesSection;