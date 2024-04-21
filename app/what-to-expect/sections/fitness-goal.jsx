const FitnessGoal = () => {
  return (
    <section className="bg-zinc-900 py-20 [&_h3]:uppercase">
      <h2 className="text-5xl text-center text-white pb-8 uppercase">What is your main fitness goal?</h2>
      <div className="flex flex-wrap justify-center *:grow *:shrink *:basis-20 gap-8 pt-6 pb-6 ms-auto me-auto text-zinc-900 *:text-center  *:bg-neutral-50 *:rounded-3xl *:flex *:flex-col  *:gap-4 *:p-8 *:max-w-80 *:min-w-80">

        {/* Box 1 */}
        <div>
          <span className="material-symbols-outlined text-4xl">monitor_weight_loss</span>
          <h3 className="text-xl leading-none font-medium uppercase">Weight Loss</h3>
          <p>Feel lighter & find your confidence. Our coaches guide you to sustainable weight loss goals.</p>
        </div> 

        {/* Box 2 */}
        <div>
          <span className="material-symbols-outlined text-4xl">exercise</span>
          <h3 className="text-xl font-medium">Get Strong</h3>
          <p>Discover your inner strength & sculpt a toned body. Our coaches design personalised programmes for muscle building.</p>
        </div>

        {/* Box 3 */}
        <div>
          <span className="material-symbols-outlined text-4xl">directions_run</span>
          <h3 className="text-xl font-medium">Improve Stamina</h3>
          <p>Increase your energy & enjoy an active life. Our coaches support you in building lasting endurance.</p>
        </div> 

      </div>
    </section>
  )
}

export default FitnessGoal;