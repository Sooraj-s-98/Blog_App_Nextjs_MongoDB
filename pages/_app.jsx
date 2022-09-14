import '@/assets/base.css';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';


componentDidMount() {
  Router.events.on("routeChangeStart", url => {
    if (window && window._paq) {
      window._paq.push(["setCustomUrl", url]);
      window._paq.push(["setDocumentTitle", document.title]);
      window._paq.push(["trackPageView"]);
    }
  });
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://cloudwaysappsmozilor.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/cloudwaysappsmozilor.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
