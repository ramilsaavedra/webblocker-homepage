import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <meta
          name='description'
          content='A free chrome extension that lets you block distracting websites to stay focus.'
        />
        <meta
          property='og:title'
          content='Web Blocker | Block Unlimited Site for Free'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.webblockerextension.com/'
        />
        <meta
          property='og:description'
          content='A free chrome extension that lets you block distracting websites to stay focus.'
        />
        <meta property='og:image' content='/og-image.jpg' />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='314' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
