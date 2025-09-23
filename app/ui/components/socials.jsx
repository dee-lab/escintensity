import Image from "next/image";
import Link from "next/link";

const Socials = () => {
	return (
		<section className='flex flex-wrap justify-evenly [&>*]:py-8 [&>*]:px-12 lg:[&>*]:px-28 border-b-[0.25px] border-zinc-500'>
			<Link
				href='https://www.instagram.com/syxx.esccoaching/'
				target='_blank'
				className='hover:bg-red-800'
			>
				<Image
					src='/Instagram_Logo.png'
					width={50}
					height={50}
					alt='Instagram Logo'
				/>
			</Link>
			<Link
				href='https://www.tiktok.com/@syxx.esccoaching/'
				target='_blank'
				className='hover:bg-red-800'
			>
				<Image
					src='/TikTok_Logo.png'
					width={50}
					height={50}
					alt='TikTok Logo'
				/>
			</Link>

			<Link
				href='https://www.facebook.com/syxx.esccoaching/'
				target='_blank'
				className='hover:bg-red-800'
			>
				<Image
					src='/Facebook_Logo.png'
					width={50}
					height={50}
					alt='Facebook Logo'
				/>
			</Link>
			<Link
				href='https://www.youtube.com/@syxx.esccoaching/'
				target='_blank'
				className='hover:bg-red-800'
			>
				<Image
					src='/YouTube_Logo.png'
					width={50}
					height={50}
					alt='Youtube Logo'
				/>
			</Link>
		</section>
	);
};

export default Socials;
