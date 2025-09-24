import { useRouter } from "next/navigation";
import { Button } from "../ui/components/button";

const StartSection = () => {
	const router = useRouter();
	return (
		<section className='bg-neutral-50 py-16'>
			<div className='flex flex-col text-zinc-900 text-center items-center gap-8 ms-auto me-auto max-w-[80%]'>
				<h2 className='my-5'>
					Do you dream of a healthier, stronger you but lack the guidance to get
					there?
				</h2>
				<Button
					variant='primary'
					size='md'
					onClick={() => router.push("/contact")}
				>
					<span>Get In Touch</span>
				</Button>
			</div>
		</section>
	);
};

export default StartSection;
