import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //Need this for icons to work properly
import Layout from "../components/core/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
