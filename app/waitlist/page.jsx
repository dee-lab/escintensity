"use client"
import Script from 'next/script'

export default function WaitList() {
  return (
    <> 
      <Script id="mailerlite" 
        strategy="beforeInteractive" 
        dangerouslySetInnerHTML={{
      __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '927700');`}} />
      <div class="ml-embedded" data-form="hdKVkQ"></div>
    </>
  );
}