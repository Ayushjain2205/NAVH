import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="normal">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
