import { useRouter } from "next/navigation";
import { Button } from "../../ui/components/button";

const Header = () => {
	const router = useRouter();
	return (
		<header className='bg-zinc-100 py-8'>
			<div className='flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]'>
				<h1 className='my-5'>Your Fitness Journey Starts Here</h1>
				<p className=' text-xl'>
					No stress, no guesswork — just a simple step-by-step journey to get
					you moving towards your goals. We&apos;ll be with you at every stage,
					making sure you feel confident and supported from day one.
				</p>

				<div className='flex flex-wrap justify-center *:grow *:shrink *:basis-20 gap-8 pt-6 pb-6 ms-auto me-auto text-zinc-900 *:text-center  *:bg-zinc-200 *:rounded-3xl *:flex *:flex-col  *:gap-4 *:p-8 *:max-w-80 *:min-w-80'>
					{/* Box 1 */}
					<div>
						<span className='material-symbols-outlined text-4xl'>
							calendar_month
						</span>
						<h3 className='text-xl leading-none font-medium'>
							1. Take the First Step
						</h3>
						<p>
							Share your goals in a quick consultation form — the beginning of
							your transformation.
						</p>
					</div>

					{/* Box 2 */}
					<div>
						<span className='material-symbols-outlined text-4xl'>call</span>
						<h3 className='text-xl font-medium'>2. Let&apos;s Talk</h3>
						<p>
							Join a free 30-minute call to discuss your goals, answer
							questions, and plan your path forward.
						</p>
					</div>

					{/* Box 3 */}
					<div>
						<span className='material-symbols-outlined text-4xl'>exercise</span>
						<h3 className='text-xl font-medium'>3. Get Set Up</h3>
						<p>
							We&apos;ll create your personalised workout and nutrition plan and
							connect you with our app.
						</p>
					</div>

					{/* Box 4 */}
					<div>
						<span className='material-symbols-outlined text-4xl'>
							rocket_launch
						</span>
						<h3 className='text-xl font-medium'>4. Start Strong</h3>
						<p>
							Everything&apos;s ready — begin your programme with full support
							from day one.
						</p>
					</div>
				</div>

				<Button
					className='my-8 px-12'
					variant='primary'
					size='lg'
					onClick={() => router.push("/contact")}
				>
					<span>Let&apos;s Do This!</span>
				</Button>
			</div>
		</header>
	);
};

export default Header;
