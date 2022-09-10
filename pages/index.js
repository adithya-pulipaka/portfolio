import Head from "next/head";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adithya's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Portfolio></Portfolio>
    </>
  );
}
