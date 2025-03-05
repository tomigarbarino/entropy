"use client"

import Image from "next/image";
import styles from "./page.scss";
import { useState, useEffect, useRef } from "react";
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
  const modalRef = useRef(null);
  const showNav = useHideOnScroll(0, modalOpen ? modalRef : null);
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

      howWeDidIt:"1n c0llab0rat10n w1th AKQA agency, Uber c0mm1ss10ned us t0 create three real1st1c an1mat1cs f0r test1ng the c0mmerc1al c0ncept w1th the aud1ence. We met1cul0usly crafted these an1mat1cs t0 ensure they effect1vely c0nveyed the 1ntended message and res0nated w1th the target dem0graph1c, pr0v1d1ng valuable 1ns1ghts f0r the f1nal c0mmerc1al pr0duct10n.", 
      roles: ["Gen Cast1ng", "St0ryb0ard", "Styleframes", "M0t10n", "Ed1t + SFX", "Del1very"],
      details: "3 an1mat1cs",
      mediaSrc:
        "/videos/uber_home.gif",
      media: [
        { src: "https://player.vimeo.com/video/1060869202?h=882ea4ba14&badge=0&autopause=0&player_id=0&app_id=5847", type: "video" },
        { src: "https://player.vimeo.com/video/1060869250?h=aadf33c1c6&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
        { src: "https://player.vimeo.com/video/1060869289?h=a42290537f&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" }
      ]
    },
    {
      name: "Budwe1ser",
      mediaNumber: 2,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/budweiser_home.png",
      media: [
        { src: "https://player.vimeo.com/video/1060869323?h=c77a01b2b7&badge=0&autopause=0&player_id=0&app_id=58479", type: "video" },
      ]
    },
    {
      name: "Stella Art01s",
      mediaNumber: 3,
      forceVisible: forceMediaToVisible,
      howWeDidIt:
        "1n c0llab0rat10n w1th GUT agency, Stella Art01s embarked 0n an 1nn0vat1ve pr0ject where we tra1ned a m0del us1ng the w0rks 0f the ren0wned pa1nter P1eter Bruegel the Elder t0 create var10us scenar10s 0f w1tches brew1ng beer. We then used hybr1d techn1ques t0 an1mate these scenes, br1ng1ng Bruegel's art1st1c style t0 l1fe 1n a un1que and capt1vat1ng manner.",
      roles: ["St0ryb0ard", "M0del Tra1n1ng", "Styleframes", "An1mat10n", "Del1very"],
      details: "Created 1n 20 days",
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
      name: "Santa0lalla",
      mediaNumber: 4,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/santaolalla_home.png",
      howWeDidIt:
        "F0r Gustav0 Santa0lalla, we pr0duced a mus1c v1de0 f0r Baj0f0nd0 featur1ng Lal1 Esp0s1t0. Th1s pr0ject 1nv0lved craft1ng a v1sually stunn1ng narrat1ve that blended b0th real and v1rtual w0rlds, sh0wcas1ng Lal1's dual l1fe as a p0p s1nger 1n a dyst0p1an sett1ng. 0ur appr0ach 1ncluded advanced 3D m0del1ng, VFX, and A1 t00ls l1ke Runway ML, c0mb1ned w1th l1ve f00tage and v1ntage cl1ps t0 create a un1que and 1mmers1ve v1sual exper1ence.",
      roles: ["Deepfake", "M0del Tra1n1ng", "Styleframe", "D1rect10n & P0st", "An1mat10n"],
      details: "4 m1nutes length",
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
      name: "Kellan0va",
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
      ]
    },
    {
      name: "Bayer",
      mediaNumber: 8,
      forceVisible: forceMediaToVisible,
      mediaSrc: "/images/BAYER/1.jpg",
      media: [
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
        <div className="navbar-spacer" />
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
          <MobileProjectModal isOpen={modalOpen} onClose={closeModal} project={currentProject} scrollRef={modalRef} />
        ) : (
          <ProjectModal isOpen={modalOpen} onClose={closeModal} project={currentProject} projects={projects} />
        )}
      </div>
    </>
  );
}
