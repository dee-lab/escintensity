"use client";

import Image from "next/image";

export default function CoachJoel() {
	return (
		<main className='bg-zinc-100 pt-12 text-zinc-900 text-center'>
			{/* slice */}
			<div className='flex flex-col lg:flex-row justify-center items-center ms-auto me-auto max-w-[80%]'>
				<div>
					<h1 className='uppercase text-6xl xl:text-7xl'>Meet your coach</h1>
					<h2 className='my-6 text-3xl'>Joel also known as Syxx</h2>
					<ul className='leading-8 flex flex-wrap gap-3 text-sm *:py-1 *:px-5 *:border *:rounded-full *:w-max *:border-gray-950 *:flex *:items-center justify-center lg:mb-8'>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Body fat reduction
						</li>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Muscular development
						</li>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Bodybuilding
						</li>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Lifestyle coaching
						</li>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Online coaching
						</li>
						<li>
							<span className='material-symbols-outlined pr-1'>check</span>
							Tailored nutrition plans
						</li>
					</ul>
				</div>
				<Image
					src='/Joel-coach.png'
					className='pt-5'
					width={410}
					height={410}
					alt="An image of Joel's body transformation"
				/>
			</div>
			{/* line */}
			<div className='bg-zinc-800 rotate-2 h-16 -ml-2 -mt-3 lg:-mt-5'></div>
			{/* slice */}
			<div className='bg-zinc-800 -mt-8'>
				<div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]'>
					<div className='pt-8 pb-8 lg:pt-12 lg:pb-16 lg:*:px-16 text-xl leading-9 text-neutral-50'>
						<h3 className='pb-8'>Your Fitness Journey, Guided by Experience</h3>
						<p>
							I&#39;m Joel, also known as Syxx; a level 3 personal trainer with
							over 17 years experience training and coaching a wide range of
							clients based on their specific fitness goals. <br />
							<br />I have gone through countless physique transformations
							myself including competitive bodybuilding. Due to this, not only
							do I understand your challenges that may come within your fitness
							journey; but more importantly, how to overcome them to achieve
							your desired result.
						</p>
					</div>
					<Image
						src='/Joel-comp.jpg'
						width={410}
						height={546}
						alt='An image of Joel, posing at his bodybuilding competition'
					/>
				</div>
			</div>
			{/* line */}
			<div className='bg-zinc-100 rotate-2 h-16 -mt-7'></div>
			{/* slice */}
			<div className='flex flex-col lg:flex-row justify-center items-center ms-auto me-auto max-w-[80%] text-xl leading-10'>
				<p className=''>
					Whether you&#39;re starting your journey or taking it to the next
					level, I believe with the right guidance, support and accountability,
					anyone can transform their physique whilst improving their physical
					and mental health.
				</p>
				<Image
					src='/Joel-transformation.jpg'
					className='pt-6 px-6 lg:pl-16'
					width={510}
					height={510}
					alt="An image of Joel's body transformation"
				/>
			</div>
			{/* line */}
			<div className='bg-zinc-800 rotate-2 h-16 -ml-2 mt-16'></div>
			{/* slice */}
			<div className='bg-zinc-800 -mt-8'>
				<div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]'>
					<div className='py-16 text-xl leading-10 text-zinc-800 '>
						<div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch *:grow *:shrink *:basis-20 gap-8 ms-auto me-auto max-w-[80%] *:bg-neutral-50 *:text-left *:text-zinc-800 *:flex *:flex-col *:gap-4 *:justify-between *:p-8 *:max-w-[640px] *:min-w-2/5 *:rounded-2xl '>
							{/* Box 1 */}
							<div className='text-xl leading-10'>
								<blockquote>
									&quot;Syxx has been pivotal to the way that I have not only
									changed and made my body healthier, but also the way that I
									now look at fitness and nutrition.&quot;
								</blockquote>
								<div className='flex flex-row justify-between items-center'>
									<p>-- Ludwig A.</p>
									<Image
										src='/five-stars-white.png'
										width={143.5}
										height={21}
										alt='Five stars'
									/>
								</div>
							</div>

							{/* Box 2 */}
							<div className='text-xl leading-10'>
								<blockquote>
									&quot;Signing up with Syxx was the best decision I could have
									made for my fitness goals.&quot;
								</blockquote>
								<div className='flex flex-row justify-between items-center'>
									<p>-- Sarah King</p>
									<Image
										src='/five-stars-white.png'
										width={143.5}
										height={21}
										alt='Five stars'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
