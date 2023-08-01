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
			<script id="cookieyes" type="text/javascript" src="https://scriptstaging.cookieyes.com/client_data/43895fdbb5a4bf14ba075efb/script.js"></script>
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
