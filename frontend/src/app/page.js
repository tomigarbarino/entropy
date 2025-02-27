"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeMedia from "./components/HomeMedia/HomeMedia";
import useIsMobile from "./hooks/isMobile";


export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
    <div className="globalContainer">
      <Navbar />
      <div className="home">
        <div className="row row1">
          <HomeMedia mediaSrc={"/videos/uber_home.gif"} mediaNumber={1} forceVisible={isMobile} />
          <HomeMedia mediaSrc={"/images/budweiser_home.png"} mediaNumber={2} forceVisible={isMobile}  />
          <HomeMedia mediaSrc={"/images/stella_home.png"} mediaNumber={3} forceVisible={isMobile} />
          <HomeMedia mediaSrc={"/images/santaolalla_home.png"} mediaNumber={4} forceVisible={isMobile} />
        </div>
        <div className="row row2">
          <HomeMedia mediaSrc={"/images/keller_home.jpg"} mediaNumber={5} forceVisible={isMobile} />
          <HomeMedia mediaSrc={"/images/tmr_home.png"} mediaNumber={6} forceVisible={isMobile} />
          <HomeMedia mediaSrc={"/images/bayer_home.png"} mediaNumber={7} forceVisible={isMobile} />
          <HomeMedia mediaSrc={"/images/panda_home.png"} mediaNumber={8} forceVisible={isMobile}  />
        </div>
      </div>
    </div>
    </>
  );
}
