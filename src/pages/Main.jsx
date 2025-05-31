import React, { useRef, useState } from "react";

// section components
import Header from "./components/Header";
import Visual from "./components/Visual";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

// img
const Img01 = "/img/cardimg_01.jpg";

export default function Main() {
  return (
    <>
      <div className="wrap">
        <Header />
        <div className="main">
          <Visual />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
    </>
  );
}
