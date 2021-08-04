import React from "react";

import {
  AboutContents,
  AboutContentstwo,
  AboutContentsthree,
  HeroContent,
} from "./data/contents";

// import all components here
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import About from "./components/aboutSection";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="constrainst">
        <HeroSection data={HeroContent} />
        <About />
        <HeroSection data={AboutContents} />
        <HeroSection data={AboutContentstwo} />
        <HeroSection data={AboutContentsthree} />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default App;
