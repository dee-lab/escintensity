import Accordion from "../../ui/components/accordion";

const FAQ = () => {
	return (
		<section className='bg-neutral-50 py-16' id='faqs'>
			<div className='flex flex-col text-zinc-900 items-center gap-8 ms-auto me-auto max-w-[80%]'>
				<h3 className='text-4xl my-5 uppercase text-center'>
					Frequently asked questions
				</h3>
				<div className='w-full'>
					<Accordion
						header='What is the difference between personal training and online coaching?'
						summary={[
							"Personal training is typically in-person, with a trainer guiding you through workouts and providing feedback on form. Online coaching offers similar guidance and program design, but virtually, with communication through calls, messaging and voice notes.",
						]}
					/>
					<Accordion
						header='Who can benefit from a personal trainer or online coach?'
						summary={[
							"Anyone looking for guidance and support in reaching their fitness goals! Whether you're a beginner needing a roadmap or a seasoned gym-goer wanting to take things to the next level, we can help.",
						]}
					/>
					<Accordion
						header='How much does personal training or online coaching cost?'
						summary={[
							"Prices vary depending on the program you select.  Expect to pay more for personalised plans",
						]}
					/>
					<Accordion
						header='How often should I train?'
						summary={[
							"This depends on your goals, fitness level, and schedule. We can help design a program that fits your needs.",
						]}
					/>
					<Accordion
						header='Do I need a gym membership for online coaching?'
						summary={[
							"Not necessarily! We can design programs using bodyweight exercises or home gym equipment. However, a gym membership can offer additional exercise variety.",
						]}
					/>
					<Accordion
						header="I'm nervous about getting started. What should I do?"
						summary={[
							"We offer consultations to discuss your goals and answer questions. This is a great way to ease your nerves and see if we're a good fit.",
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
