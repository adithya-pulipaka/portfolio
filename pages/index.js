import Head from "next/head";
import Portfolio from "../components/portfolio/Portfolio";
import { NextSeo } from "next-seo";

export default function Home({ postsInfo }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Adithya's Portfolio"
        description="Adithya Kashyap's Portfolio"
        openGraph={{
          url: "https://adithyakashyap.com/",
          title: "Adithya Kashyap's Portfolio",
        }}
      />
      <Portfolio></Portfolio>
    </>
  );
}
