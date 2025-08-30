import Image from "next/image";
import Link from "next/link";

const Coaches = () => {
	return (
		<section className='bg-neutral-50 py-16'>
			<div className='flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]'>
				<div className='flex flex-wrap justify-center items-center gap-8 *:shrink *:grow *:basis-1/2 *:max-w-[350px]'>
					<Link href='coaches/joel'>
						<Image
							src='/Joel.png'
							width={350}
							height={450}
							alt='An image of Joel, also known as Syxx, one of the coaches'
						/>
					</Link>
					{/* <Link href='coaches/craig'>
						<Image
							src='/Craig.png'
							width={350}
							height={450}
							alt='An image of Craig, one of the coaches'
						/>
					</Link> */}
				</div>
			</div>
		</section>
	);
};

export default Coaches;
