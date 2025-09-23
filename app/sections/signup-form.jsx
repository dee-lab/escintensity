import { useRouter } from "next/navigation";
import NewsletterForm from "../ui/components/MailerLiteNewsletterForm";

const SignupSection = () => {
	const router = useRouter();
	return (
		<div className='bg-neutral-50 py-20'>
			<section className='text-zinc-900 justify-items-center ms-auto me-auto  max-w-[80%] lg:max-w-[50%]'>
				<NewsletterForm />
			</section>
		</div>
	);
};

export default SignupSection;
