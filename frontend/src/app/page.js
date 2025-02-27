"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeMedia from "./components/HomeMedia/HomeMedia";


export default function Home() {
  const [a,b] = useState("sds")
  return (
    <>
    <div className="globalContainer">
      <Navbar />
      <div className="home">
        <div className="row row1">
          <HomeMedia mediaSrc={"/videos/uber_home.gif"} mediaNumber={1} />
          <HomeMedia mediaSrc={"/images/budweiser_home.png"} mediaNumber={2}  />
          <HomeMedia mediaSrc={"/images/stella_home.png"} mediaNumber={3} />
          <HomeMedia mediaSrc={"/images/santaolalla_home.png"} mediaNumber={4} />
        </div>
        <div className="row row2">
          <HomeMedia mediaSrc={"/images/keller_home.jpg"} mediaNumber={5} />
          <HomeMedia mediaSrc={"/images/tmr_home.png"} mediaNumber={6} />
          <HomeMedia mediaSrc={"/images/bayer_home.png"} mediaNumber={7} />
          <HomeMedia mediaSrc={"/images/panda_home.png"} mediaNumber={8}  />
        </div>
      </div>
    </div>
    </>
  );
}
