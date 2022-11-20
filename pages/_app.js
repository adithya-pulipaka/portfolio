import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //Need this for icons to work properly
import Layout from "../components/core/Layout";
import { AppContextProvider } from "../hooks/useAppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
