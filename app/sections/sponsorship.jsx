import Image from "next/image";
import Link from "next/link";

const SponsorshipSection = () => {
	return (
		<section className='bg-zinc-900 pt-12 pb-14 flex flex-col gap-8 text-neutral-50 '>
			<h3 className='text-4xl text-center  my-4 uppercase'>
				Our valued partners
			</h3>
			<div className='flex flex-row justify-center items-center gap-8 p-4 *:shrink *:grow *:basis-52 *:max-w-96 *:flex *:flex-col *:items-center text-center'>
				<a
					href='https://www.libertysupplements.co.uk/'
					target='_blank'
					rel='noopener'
				>
					<Image
						src='/liberty-supplements.png'
						width={500}
						height={500}
						alt='Syxx in Liberty Supplements merchandise'
					/>
					<p className='pt-4 uppercase text-lg underline hover:text-red-800'>
						Liberty Supplements
					</p>

					<p className='pb-8 uppercase'>
						Use Code <span className='font-bold text-red-600'>SYXX10</span>
						<br /> for 10% off
					</p>
				</a>
				<a
					href='https://www.refinednutrition.co.uk/'
					target='_blank'
					rel='noopener'
				>
					<Image
						src='/refined-nutrition.png'
						width={500}
						height={500}
						alt='Syxx standing next to the Refined Nutrition logo at their head office'
					/>
					<p className='pt-4 uppercase text-lg underline hover:text-red-800'>
						Refined Nutrition
					</p>
					<p className='pb-8 uppercase'>
						Use Code <span className='font-bold text-red-600'>SYXX</span>
						<br /> for 10% off
					</p>
				</a>
				{/* As an Amazon Associate I earn from qualifying purchases. */}
				{/* <Image src="/logo-source-performance.png" 
          width={200} 
          height={200}
          alt="Source Performance logo" /> */}
			</div>
		</section>
	);
};

export default SponsorshipSection;
