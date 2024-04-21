import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shahbaaz Khan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Shahbaaz Khan" />
        <meta name="keywords" content="Fullstack developer, Web developer, OpenAI developer, Software Engineer, Microsoft" />
        <meta name="description" content="Hello! I am a software engineer. Worked on multitude of projects." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Shahbaaz Khan" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Shahbaaz Khan</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Shahbaaz Khan"/>
        <meta data-rh="true" property="og:image" content="/images/blaiti.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;