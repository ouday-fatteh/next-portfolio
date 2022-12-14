import Head from "next/head";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";
import {
  Hero,
  Navbar,
  Services,
  Card,
  Portfolio,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ouday Fatteh</title>
        <meta name="description" content="A Full-stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        setLanguage={setLanguage}
        language={language}
      />
      <main className="bg-white pt-40 px-10 md:px-20 lg:px-40  dark:bg-gray-900 transition ease-in-out delay-150  overflow-x-hidden">
        <section className=" min-h-screen ">
          <Hero language={language} />
        </section>
        <section>
          <Services language={language} />
          <div className="lg:flex gap-10">
            <Card image={design} num={0} language={language} />
            <Card image={code} num={1} language={language} />
            <Card image={consulting} num={2} language={language} />
          </div>
        </section>
        <section>
          <Portfolio language={language} />
        </section>
        <section>
          <Contact language={language} />
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
