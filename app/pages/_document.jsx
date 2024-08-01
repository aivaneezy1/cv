// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
            strategy="lazyOnload" // or "lazyOnload" if you don't need it immediately
     
          />
          <Script
            id="emailjs-init"
            strategy="lazyOnload" // or "lazyOnload" if you don't need it immediately
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  emailjs.init("qVRXrHYsC0K_SArP1");
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
