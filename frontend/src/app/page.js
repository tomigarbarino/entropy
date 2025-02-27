"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeMedia from "../components/HomeMedia/HomeMedia";
import useIsMobile from "../hooks/isMobile";


export default function Home() {
  const timeOutValidationActivated = true;
  const timeToForceAllMediaVisible = 20000;
  const isMobile = useIsMobile();
  const [forceVisible, setForceVisible] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      if (timeOutValidationActivated) {
        setForceVisible(true);
      }
    },timeToForceAllMediaVisible);
  }, []);


  const forceMediaToVisible = isMobile || forceVisible;
  return (
    <>
    <div className="globalContainer">
      <Navbar />
      <div className="home">
        <div className="row row1">
          <HomeMedia mediaSrc={"/videos/uber_home.gif"} mediaNumber={1} forceVisible={forceMediaToVisible} name={"Uber"} />
          <HomeMedia mediaSrc={"/images/budweiser_home.png"} mediaNumber={2} forceVisible={forceMediaToVisible} name={"Budwe1ser"} />
          <HomeMedia mediaSrc={"/images/stella_home.png"} mediaNumber={3} forceVisible={forceMediaToVisible} name={"Stella Art01s"} />
          <HomeMedia mediaSrc={"/images/santaolalla_home.png"} mediaNumber={4} forceVisible={forceMediaToVisible} name={"Santa0lalla"} />
        </div>
        <div className="row row2">
          <HomeMedia mediaSrc={"/images/keller_home.jpg"} mediaNumber={5} forceVisible={forceMediaToVisible} name={"Kellan0va"} />
          <HomeMedia mediaSrc={"/images/tmr_home.png"} mediaNumber={6} forceVisible={forceMediaToVisible} name={"TMR"} />
          <HomeMedia mediaSrc={"/images/bayer_home.png"} mediaNumber={7} forceVisible={forceMediaToVisible} name={"Bayor"} />
          <HomeMedia mediaSrc={"/images/panda_home.png"} mediaNumber={8} forceVisible={forceMediaToVisible} name={"Pandaf00d"} />
        </div>
      </div>
    </div>
    </>
  );
}
