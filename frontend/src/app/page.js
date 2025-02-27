"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";


export default function Home() {
  const [a,b] = useState("sds")
  return (
    <>
      <Navbar />
    </>
  );
}
