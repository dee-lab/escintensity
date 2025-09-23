import { useState, useEffect } from "react";
import "./newsletterForm.css";

function NewsletterForm() {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Load MailerLite webforms script
		const script = document.createElement("script");
		script.src =
			"https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";
		script.async = true;
		document.body.appendChild(script);

		fetch(
			"https://assets.mailerlite.com/jsonp/927700/forms/164233595473364218/takel"
		);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = e.target;
		const formData = new FormData(form);

		fetch(form.action, {
			method: form.method,
			body: formData,
			mode: "no-cors",
		})
			.then(() => {
				setLoading(false);
				setSubmitted(true);
			})
			.catch(() => {
				setLoading(false);
				setSubmitted(true);
			});
	};

	return (
		<div
			id='mlb2-30297441'
			className='ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30297441 wrapper'
		>
			<div className='ml-form-align-center'>
				<div className='ml-form-embedWrapper embedForm'>
					<div
						className={`ml-form-embedBody ml-form-embedBodyDefault row-form ${
							submitted ? "fade-out" : "fade-in"
						}`}
						style={{ display: submitted ? "none" : "block" }}
					>
						<div className='ml-form-embedContent'>
							<h4 className='text-4xl'>Stay in the know</h4>
							<p>
								Be the first one to receive new releases, special offers, and
								more
								{/* Subscribe to get exclusive access to expert Q&As, inspiring
								community stories, special offers, and expert nutrition
								tips—delivered straight to your inbox.  */}
							</p>
						</div>

						<form
							className='ml-block-form'
							action='https://assets.mailerlite.com/jsonp/927700/forms/164233595473364218/subscribe'
							method='post'
							target='_blank'
							onSubmit={handleSubmit}
						>
							<div className='ml-form-formContent'>
								<div className='ml-form-fieldRow ml-last-item'>
									<div className='ml-field-group ml-field-email ml-validate-email ml-validate-required'>
										<input
											aria-label='email'
											aria-required='true'
											type='email'
											className='form-control'
											name='fields[email]'
											placeholder='Enter your email'
											autoComplete='email'
											required
										/>
									</div>
								</div>
							</div>

							<input type='hidden' name='ml-submit' value='1' />
							<input type='hidden' name='anticsrf' value='true' />

							<div className='ml-form-embedSubmit'>
								<button type='submit' className='primary' disabled={loading}>
									{loading ? "Submitting..." : "Sign up"}
								</button>

								{loading && (
									<button type='button' className='loading' disabled>
										<div className='ml-spinner'></div>
										<span className='sr-only'>Loading...</span>
									</button>
								)}
							</div>
						</form>
					</div>

					<div
						className={`ml-form-successBody row-success ${
							submitted ? "fade-in" : "fade-out"
						}`}
						style={{ display: submitted ? "block" : "none" }}
					>
						<div className='ml-form-successContent'>
							<h4 className='text-4xl'>Almost there!</h4>
							<p>
								You've successfully signed up for our newsletter.
								<br /> Just one more step to confirm your email and you'll be on
								your way to receiving all our best content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsletterForm;
