/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

export default function CoachCraig() {
	return (
		<main className='bg-zinc-100 py-12 text-zinc-900 text-center'>
			{/* slice */}
			<div className='flex flex-col-reverse lg:flex-row justify-center items-center ms-auto me-auto max-w-[80%]'>
				<Image
					src='/Craig.png'
					width={350}
					height={450}
					alt='An image of Craig, one of the coaches'
				/>
				<div>
					<h1>I&#39;m Craig</h1>
					<p className=' text-2xl'>XXX Coach</p>
					<div className='py-8 lg:py-4 lg:px-20'>
						<p className='text-xl leading-8'>Intro to Craig</p>
					</div>
				</div>
			</div>
			{/* line */}
			<div className='bg-zinc-800 rotate-2 h-16 -ml-2 -mt-3 lg:mt-0'></div>
			{/* slice */}
			<div className='bg-zinc-800 -mt-8'>
				<div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]'>
					<img src='https://placehold.co/410x546' alt='A placeholder image' />
					<div className='py-8 lg:*:px-16 text-xl leading-10 text-neutral-50'>
						<p>Craigs story</p>
					</div>
				</div>
			</div>
			{/* line */}
			<div className='bg-zinc-100 rotate-2 h-16 -mt-[38px]'></div>
			{/* slice */}
			<div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]'>
				<img src='https://placehold.co/410x546' alt='A placeholder image' />
				<div className=' py-8 lg:*:px-16 text-xl leading-10'>
					<p>Ending</p>
				</div>
			</div>
			{/* line */}
			<div className='bg-zinc-800 rotate-2 h-16 -ml-2 mt-16'></div>
			{/* slice */}
			<div className='bg-zinc-800 -mt-8'>
				<div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-8 ms-auto me-auto max-w-[80%]'>
					<div className='py-16 text-xl leading-10 text-neutral-50'>
						<span className='material-symbols-outlined text-4xl'>
							stack_star
						</span>
						<h3 className='text-xl font-medium uppercase pb-4'>
							specialist areas
						</h3>
						<p className='hidden lg:inline'>xx | xx</p>
						<ul className='*:list-none lg:hidden leading-8'>
							<li>xx</li>
							<li>xx</li>
						</ul>
					</div>
				</div>
			</div>
			{/* line */}
			<div className='bg-zinc-800 rotate-2 h-16 -mt-8'></div>
			{/* slice */}
			<div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch *:grow *:shrink *:basis-20 gap-8 pt-20 ms-auto me-auto max-w-[80%] *:bg-zinc-800 *:text-left *:text-neutral-50 *:flex *:flex-col *:gap-4 *:justify-between *:p-8 *:max-w-[640px] *:min-w-2/5 *:rounded-2xl *:opacity-80'>
				{/* Box 1 */}
				<div className='text-xl leading-10'>
					<blockquote>&quot;Client quote.&quot;</blockquote>
					<div className='flex flex-row justify-between items-center'>
						<p>-- Client name</p>
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
					<blockquote>&quot;Client quote&quot;</blockquote>
					<div className='flex flex-row justify-between items-center'>
						<p>-- Client name</p>
						<Image
							src='/five-stars-white.png'
							width={143.5}
							height={21}
							alt='Five stars'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
