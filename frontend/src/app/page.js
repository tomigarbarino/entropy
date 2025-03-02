"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeMedia from "../components/HomeMedia/HomeMedia";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import useIsMobile from "../hooks/isMobile";
import HomeMediaGrid from "../components/HomeMediaGrid/HomeMediaGrid";
import useHideOnScroll from '../hooks/useHideOnScroll'; 
import MobileProjectModal from "../components/MobileProjectModal/MobileProjectModal";

export default function Home() {
  const timeOutValidationActivated = true;
  const timeToForceAllMediaVisible = 20000;
  const isMobile = useIsMobile();
  const [forceVisible, setForceVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const showNav = useHideOnScroll(0);

  useEffect(() => {
    setTimeout(() => {
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
      mediaSrc:
        "/videos/uber_home.gif",
      media: [
        { src: "https://player.vimeo.com/video/1060869202?h=882ea4ba14&badge=0&autopause=0&player_id=0&app_id=5847", type: "video" },
        { src: "https://player.vimeo.com/video/1060869250?h=aadf33c1c6&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "https://player.vimeo.com/video/1060869289?h=a42290537f&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" }
      ]
    },
    {
      name: "Budweiser",
      mediaNumber: 2,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/budweiser_home.png",
      media: [
        { src: "https://player.vimeo.com/video/1060869323?h=c77a01b2b7&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "/images/budweiser_home.png", type: "image" },
        { src: "/images/budweiser_2.png", type: "image" }
      ]
    },
    {
      name: "Stella Art01s",
      mediaNumber: 3,
      forceVisible: forceMediaToVisible,
      howWeDidIt:
        "In collaboration with GUT agency, Stella Artois embarked on an innovative project where we trained a model using the works of the renowned painter Pieter Bruegel the Elder to create various scenarios of witches brewing beer. We then used hybrid techniques to animate these scenes, bringing Bruegel's artistic style to life in a unique and captivating manner.",
      roles: ["Storyboard", "Model Training", "Styleframes", "Animation", "Delivery"],
      details: "Created in 20 days",
      mediaSrc: "/images/stella_home.png",
      media: [
        { src: "https://player.vimeo.com/video/1060869647?h=e9f2b9abfa&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
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
        { src: "/images/STELLA/T_011.jpg", type: "image" }
      ]
    },
    {
      name: "Santaolalla",
      mediaNumber: 4,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/santaolalla_home.png",
      howWeDidIt:
        "For Gustavo Santaolalla, we produced a music video for Bajofondo featuring Lali Esposito. This project involved crafting a visually stunning narrative that blended both real and virtual worlds, showcasing Lali's dual life as a pop singer in a dystopian setting. Our approach included advanced 3D modeling, VFX, and AI tools like Runway ML, combined with live footage and vintage clips to create a unique and immersive visual experience.",
      roles: ["Deepfake", "Model Training", "Styleframe", "Direction & Post", "Animation"],
      details: "4 minutes length",
      media: [
        { src: "/images/santaolalla_home.png", type: "image" },
        { src: "/images/SANTAOLALLA/5e0180d3-ed93-4e93-b67e-43772efacc93.jpg", type: "image" },
        { src: "/images/SANTAOLALLA/add38a4b-8f4d-4de1-87f4-8d0eb3e64bf2.jpg", type: "image" },
        { src: "/images/SANTAOLALLA/b75189dc-5869-42e8-af37-e7899ee2b31a.jpg", type: "image" },
        { src: "/images/SANTAOLALLA/5e0180d3-ed93-4e93-b67e-43772efacc93.jpg", type: "image" },
        { src: "/images/SANTAOLALLA/f4795341-82dd-401b-af13-1005cf3523ef.jpg", type: "image" }
      ]
    },
    {
      name: "Kellanova",
      mediaNumber: 5,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/keller_home.jpg",
      howWeDidIt: [
        "The project focused on modernizing Tony the Tiger while preserving his iconic characteristics. By training an AI model with visual references, the team maintained his confident stance, friendly expression, and energetic spirit. The AI technology allows for diverse representations of Tony in various outfits and settings, such as gyms and sports activities, where he engages in dynamic actions. This approach keeps the character relevant and appealing to contemporary audiences, enabling ongoing reinvention while honoring his essence as a symbol of an active lifestyle.",
        "Beta-mode exploration of a software solution to create static and animated content on Tony the Tiger, based out of a combination of AI tools and platforms, and prompting techniques."
      ],
      media: [
        { src: "/images/keller_home.jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (1).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (2).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (3).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (4).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (5).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (6).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (7).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (8).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (9).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (10).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (11).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (12).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (13).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (14).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (15).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (16).jpg", type: "image" },
        { src: "/images/KELLANOVA/tono (17).jpg", type: "image" }
      ]
    },
    {
      name: "TMR",
      mediaNumber: 6,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/tmr_home.png",
      media: [
        { src: "https://player.vimeo.com/video/1060869903?h=90473d634e&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "https://player.vimeo.com/video/1060869752?h=f4e2a0ce28&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "https://player.vimeo.com/video/1060869683?h=3457d55375&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "/images/tmr_home.png", type: "image" },
        { src: "/images/TMR/6dfb99d9-ec96-4613-b922-a0fc68284d28.jpg", type: "image" },
        { src: "/images/TMR/953017bd-37b9-40a8-a51b-cf0df115fd2e.jpg", type: "image" },
        { src: "/images/TMR/a36a6744-b089-4c8d-923a-3dc7ff2e7a8e.jpg", type: "image" },
        { src: "/images/TMR/ae3de181-849d-4d1f-9cb3-2e934c86180f.jpg", type: "image" },
        { src: "/images/TMR/bf982fd9-0e93-4d72-ad54-c83d9ebf1ad4.jpg", type: "image" },
        { src: "/images/TMR/e9bfedf5-bb80-40dc-899e-94d15bad5a89.jpg", type: "image" },
        { src: "/images/TMR/e185de73-07b6-4669-8212-b7d2dc3ee747.jpg", type: "image" },
        { src: "/images/TMR/eeaea961-a5ae-40a3-8089-055e100b57eb.jpg", type: "image" },
        { src: "/images/TMR/magnific-1dK3yORtBfmdwqTlKsxu-Flux-LR_00371_.jpg", type: "image" },
        { src: "/images/TMR/magnific-DLkY8pDhN2fRpEQLAzfA-Flux-LR_00432_.jpg", type: "image" }
      ]
    },
    {
      name: "Pandaf00d",
      mediaNumber: 7,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/bayer_home.png",
      media: [
        { src: "https://player.vimeo.com/video/1060869610?h=c5c47ee7a5&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "https://player.vimeo.com/video/1060869578?h=68fadce320&badge=0&autopause=0", type: "video" },
        { src: "/images/bayer_home.png", type: "image" },
        { src: "/images/BAYER/1.jpg", type: "image" },
        { src: "/images/BAYER/2.jpg", type: "image" },
        { src: "/images/BAYER/3.jpg", type: "image" },
        { src: "/images/BAYER/4.jpg", type: "image" },
        { src: "/images/BAYER/5.jpg", type: "image" },
        { src: "/images/BAYER/6.jpg", type: "image" },
        { src: "/images/BAYER/7.jpg", type: "image" },
        { src: "/images/BAYER/8.jpg", type: "image" },
        { src: "/images/BAYER/00034-20241202133700_[flux1-dev-bnb-nf4-v2]_1479102335.jpg", type: "image" },
        { src: "/images/BAYER/00589-20241209180756_[flux1-dev-bnb-nf4-v2]_38241114231.jpg", type: "image" },
        { src: "/images/BAYER/00595-20241209181943_[flux1-dev-bnb-nf4-v2]_4229721579.jpg", type: "image" },
        { src: "/images/BAYER/background.jpg", type: "image" },
        { src: "/images/BAYER/consultorio (4).jpg", type: "image" }
      ]
    },
    {
      name: "Bayer",
      mediaNumber: 8,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/panda_home.png",
      media: [
        { src: "/images/panda_home.png", type: "image" },
        { src: "/images/BAYER/1.jpg", type: "image" },
        { src: "/images/BAYER/2.jpg", type: "image" },
        { src: "/images/BAYER/3.jpg", type: "image" },
        { src: "/images/BAYER/4.jpg", type: "image" },
        { src: "/images/BAYER/5.jpg", type: "image" },
        { src: "/images/BAYER/6.jpg", type: "image" },
        { src: "/images/BAYER/7.jpg", type: "image" },
        { src: "/images/BAYER/8.jpg", type: "image" },
        { src: "/images/BAYER/00034-20241202133700_[flux1-dev-bnb-nf4-v2]_1479102335.jpg", type: "image" },
        { src: "/images/BAYER/00589-20241209180756_[flux1-dev-bnb-nf4-v2]_38241114231.jpg", type: "image" },
        { src: "/images/BAYER/00595-20241209181943_[flux1-dev-bnb-nf4-v2]_4229721579.jpg", type: "image" },
        { src: "/images/BAYER/background.jpg", type: "image" },
        { src: "/images/BAYER/consultorio (4).jpg", type: "image" }
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
        <Navbar showNav={showNav} />
        {isMobile ? (
          <HomeMediaGrid projects={projects} onProjectClick={handleCardClick} />
        ) : (
          <div className="home">
            <div className="row row1">
              {projects.slice(0, 4).map((project) => (
                <HomeMedia
                  key={project.mediaNumber}
                  {...project}
                  onClick={() => handleCardClick(project)}
                  forceVisible={false}
                />
              ))}
            </div>
            <div className="row row2">
              {projects.slice(4).map((project) => (
                <HomeMedia
                  key={project.mediaNumber}
                  {...project}
                  onClick={() => handleCardClick(project)}
                  forceVisible={false}
                />
              ))}
            </div>
          </div>
        )}
        {isMobile ? (
          <MobileProjectModal isOpen={modalOpen} onClose={closeModal} project={currentProject} />
        ) : (
          <ProjectModal isOpen={modalOpen} onClose={closeModal} project={currentProject} projects={projects} />
        )}
      </div>
    </>
  );
}
