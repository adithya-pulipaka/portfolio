import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //Need this for icons to work properly
import Layout from "../components/core/Layout";
import { AppContextProvider } from "../hooks/useAppContext";
import { BlogContextProvider } from "../hooks/useBlogContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <BlogContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BlogContextProvider>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
