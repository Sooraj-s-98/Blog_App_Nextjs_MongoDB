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
	<script id="cookieyes" type="text/javascript" src="https://scriptstaging.cookieyes.com/client_data/28d5ee5a3b85fbf492fef9a7/script.js"></script>
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
