import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de-De" >
        <Head>
     	<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/b6ea7d10b07343e59f8870af/script.js"></script>
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
