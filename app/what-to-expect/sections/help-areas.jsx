import { useRouter } from "next/navigation";
import { Button } from "../../ui/components/button";

const HelpAreas = () => {
	const router = useRouter();
	return (
		<section className='bg-zinc-900 pt-20 [&_h3]:uppercase'>
			<h2 className='text-center text-white pb-12'>
				What we can help you with{" "}
			</h2>
			<div className='flex flex-wrap justify-center *:grow *:shrink *:basis-20 pt-6 ms-auto me-auto text-zinc-900 *:text-center *:flex *:flex-col *:gap-4 *:py-20 *:px-8 *:2xl:px-32 *:min-w-80'>
				{/* Box 1 */}
				<div className='bg-zinc-200 sm:bg-neutral-50 md:bg-zinc-200'>
					<span className='material-symbols-outlined text-4xl'>body_fat</span>
					<h3 className='text-xl leading-none font-medium uppercase'>
						Weight Loss & Fat Reduction
					</h3>
					<p>
						At ESC Cochaing, we create personalised nutrition and training plans
						designed to help you lose fat sustainably. Through tailored
						workouts, regular progress tracking, and ongoing coaching, we make
						sure you stay motivated and on track every step of the way.
					</p>
				</div>

				{/* Box 2 */}
				<div className='bg-neutral-50'>
					<span className='material-symbols-outlined text-4xl'>exercise</span>
					<h3 className='text-xl font-medium'>Strength & Muscle Gain</h3>
					<p>
						Our structured strength programmes are tailored to your experience
						and goals. With careful attention to proper form, progressive
						overload, and recovery strategies, we help you gain muscle safely
						and effectively, while keeping you motivated and accountable.
					</p>
				</div>
				{/* Box 3 */}
				<div className='bg-zinc-200'>
					<span className='material-symbols-outlined text-4xl'>
						directions_run
					</span>
					<h3 className='text-xl font-medium'>Improved Stamina & Endurance</h3>
					<p>
						ESC Coaching combines cardio, circuit, and HIIT training to
						gradually improve your endurance. With a focus on progression and
						lifestyle support—including sleep and recovery tips—we ensure your
						stamina increases steadily, and every milestone is celebrated.
					</p>
				</div>
			</div>
			<div className='flex flex-wrap justify-center *:grow *:shrink *:basis-20 ms-auto me-auto text-zinc-900 *:text-center *:flex *:flex-col *:gap-4 *:py-20 *:px-8 *:2xl:px-32 *:min-w-80'>
				{/* Box 4 */}
				<div className='bg-neutral-50'>
					<span className='material-symbols-outlined text-4xl'>
						fitness_tracker
					</span>
					<h3 className='text-xl font-medium'>Functional Fitness & Mobility</h3>
					<p>
						We integrate mobility exercises and functional strength work into
						your plan to improve daily movement, posture, and joint health. Our
						coaching ensures that exercises are effective, safe, and directly
						beneficial for real-life activities.
					</p>
				</div>
				{/* Box 5 */}
				<div className='bg-zinc-200 sm:bg-neutral-50 md:bg-zinc-200'>
					<span className='material-symbols-outlined text-4xl'>
						monitor_weight
					</span>
					<h3 className='text-xl font-medium'>
						Weight Management & Lifestyle Support
					</h3>
					<p>
						Our habit-based approach helps you make lasting lifestyle changes.
						By tailoring nutrition and training to your lifestyle, we provide
						the guidance and support you need to stay consistent, maintain
						results, and feel confident in your choices.
					</p>
				</div>
				{/* Box 6 */}
				<div className='bg-neutral-50 sm:bg-zinc-200 md:bg-neutral-50'>
					<span className='material-symbols-outlined text-4xl'>psychology</span>
					<h3 className='text-xl font-medium'>Confidence & Mindset</h3>
					<p>
						ESC Coaching emphasises motivation and accountability. Through
						goal-setting strategies, supportive coaching, and a focus on small,
						achievable wins, we help you build both physical strength and
						self-confidence throughout your fitness journey.
					</p>
				</div>
			</div>
			<div className='mt-12 mb-8'>
				<Button
					className='ms-auto me-auto'
					variant='secondary'
					size='lg'
					onClick={() => router.push("/contact")}
				>
					<span>Start My Fitness Journey</span>
				</Button>
			</div>
		</section>
	);
};

export default HelpAreas;
