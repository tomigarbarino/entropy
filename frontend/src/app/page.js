"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeMedia from "../components/HomeMedia/HomeMedia";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import useIsMobile from "../hooks/isMobile";

export default function Home() {
  const timeOutValidationActivated = true;
  const timeToForceAllMediaVisible = 20000;
  const isMobile = useIsMobile();
  const [forceVisible, setForceVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(()=> {
    setTimeout(()=> {
      if (timeOutValidationActivated) {
        setForceVisible(true);
      }
    }, timeToForceAllMediaVisible);
  }, []);

  

  const forceMediaToVisible = isMobile || forceVisible;

  const projects = [
    {
      name: "Uber",
      mediaNumber: 1,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/videos/uber_home.gif",
      media: [
        { src: "/videos/uber_home.gif", type: "video" },
        { src: "/images/uber_2.png", type: "image" }
      ]
    },
    {
      name: "Budweiser",
      mediaNumber: 2,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/budweiser_home.png",
      media: [
        { src: "/images/budweiser_home.png", type: "image" },
        { src: "/images/budweiser_2.png", type: "image" }
      ]
    },
    {
      name: "Stella Art01s",
      mediaNumber: 3,
      forceVisible: forceMediaToVisible,
      howWeDidIt: "In collaboration with GUT agency, Stella Artois embarked on an innovative project where we trained a model using the works of the renowned painter Pieter Bruegel the Elder to create various scenarios of witches brewing beer. We then used hybrid techniques to animate these scenes, bringing Bruegel's artistic style to life in a unique and captivating manner.",
      roles: ["Storyboard", "Model Training", "Styleframes", "Animation", "Delivery"], 
      details: "Created in 20 days",
      mediaSrc: "/images/stella_home.png",
      media: [
                {
          src: "https://vimeo.com/landiaproductioncompany/review/1060869647/d805324c53",
          type: "video"
        },
        { src: "/images/stella_home.png", type: "image" },
        { src: "/images/STELLA/T_001.jpg", type: "image" },
        { src: "/images/STELLA/T_002.jpg", type: "image" },
        { src: "/images/STELLA/T_004.jpg", type: "image" },
        { src: "/images/STELLA/T_005.jpg", type: "image" },
        { src: "/images/STELLA/T_006.jpg", type: "image" },
        { src: "/images/STELLA/T_007.jpg", type: "image" },
        { src: "/images/STELLA/T_008.jpg", type: "image" },
        { src: "/images/STELLA/T_009.jpg", type: "image" },
        { src: "/images/STELLA/T_010.jpg", type: "image" },
        { src: "/images/STELLA/T_011.jpg", type: "image" },

      ]
    },
    {
      name: "Santaolalla",
      mediaNumber: 4,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/santaolalla_home.png",
      media: [
        { src: "/images/santaolalla_home.png", type: "image" },
        { src: "/videos/santaolalla_promo.mp4", type: "video" }
      ]
    },
    {
      name: "Kellanova",
      mediaNumber: 5,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/keller_home.jpg",
      media: [
        { src: "/images/keller_home.jpg", type: "image" },
        { src: "/images/kellanova_2.png", type: "image" }
      ]
    },
    {
      name: "TMR",
      mediaNumber: 6,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/tmr_home.png",
      media: [
        { src: "/images/tmr_home.png", type: "image" },
        { src: "/videos/tmr_reel.mp4", type: "video" }
      ]
    },
    {
      name: "Bayer",
      mediaNumber: 7,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/bayer_home.png",
      media: [
        { src: "/images/bayer_home.png", type: "image" },
        { src: "/videos/bayer_ad.mp4", type: "video" }
      ]
    },
    {
      name: "Pandaf00d",
      mediaNumber: 8,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/panda_home.png",
      media: [
        { src: "/images/panda_home.png", type: "image" },
        { src: "/videos/panda_food_promo.mp4", type: "video" }
      ]
    }
  ];
  
  const handleCardClick = (project) => {
    console.log("Clicked on project", project);
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <>
      <div className="globalContainer">
        <Navbar />
        <div className="home">
          <div className="row row1">
            {projects.slice(0, 4).map(project => (
              <HomeMedia
                key={project.mediaNumber}
                {...project}
                onClick={() => handleCardClick(project)}
                forceVisible={forceMediaToVisible}
              />
            ))}
          </div>
          <div className="row row2">
            {projects.slice(4).map(project => (
              <HomeMedia
                key={project.mediaNumber}
                {...project}
                onClick={() => handleCardClick(project)}
                forceVisible={forceMediaToVisible}
              />
            ))}
          </div>
        </div>
        <ProjectModal 
  isOpen={modalOpen} 
  onClose={closeModal} 
  project={currentProject} 
  projects={projects} 
/>

      </div>
    </>
  );
}
