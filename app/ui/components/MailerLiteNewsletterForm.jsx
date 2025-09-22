"use client";

import React, { useEffect } from "react";

const MailerLiteNewsletterFormWrapper = () => {
	useEffect(() => {
		// This is the code from the original script tag
		(function (w, d, e, u, f, l, n) {
			w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				};
			l = d.createElement(e);
			l.async = 1;
			l.src = u;
			n = d.getElementsByTagName(e)[0];
			n.parentNode.insertBefore(l, n);
		})(
			window,
			document,
			"script",
			"https://assets.mailerlite.com/js/universal.js",
			"ml"
		);

		// This is the call to the MailerLite function
		window.ml("account", "927700");
	}, []); // The empty dependency array ensures this effect runs only once when the component mounts

	return <div class='ml-embedded' data-form='YXszcy'></div>;
};

export default MailerLiteNewsletterFormWrapper;
