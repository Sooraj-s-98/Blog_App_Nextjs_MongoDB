import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html >
        <Head>
	<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/b72ddc35b16c551c0500b6d2/script.js"></script>
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
