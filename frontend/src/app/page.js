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
        <HomeMedia mediaSrc={"/videos/uber_home.gif"} />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
        <HomeMedia mediaSrc={"/images/budweiser_home.png"}  />
      </div>
    </div>
    </>
  );
}
