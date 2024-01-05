import React from "react";
import image from "../../assests/header-bg.jpg";
import Hero from "./Hero";
import MiddleSection from "./MiddleSection";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
       <Hero />
       <MiddleSection />
    </>
  );
}

export default Home;
