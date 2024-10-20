"use client";

import Nav from "../components/components/Nav";
import ShowImgFull from "../components/components/ShowImgFull";
import { useState } from "react";

import ProgrammingLanguages from "../components/Skills/Skills/ProgrammingLanguages";
import FrameworksLibraries from "../components/Skills/Skills/FrameworksLibraries";
// import Databases from "../components/Skills/Skills/Databases";
// import DevOps from "../components/Skills/Skills/DevOps";
import Tools from "../components/Skills/Skills/Tools";

import Certificate from "../components/Skills/Certificate";

import DisplayListProjects from "../components/Skills/Projects/DisplayListProjects";
import DisplayProjects from "../components/Skills/Projects/DisplayProjects";
import PortfolioVideo from "../components/Skills/PortfolioVideo";
import Artwork from "../components/Skills/Artwork";
import Activities from "../components/Skills/Activities";

function Page() {
  const [openImg, setOpenImg] = useState(false);
  const [imgForOpen, setImgForOpen] = useState();
  const [txtShowImg, setTxtShowImg] = useState("");

  return (
    <>
      <div className="bg-[var(--bg-main-edge)]">
        <Nav />
        <div
          className="py-20 flex-1 mx-auto space-y-20 bg-[var(--bg-main)] flex flex-col 
        md:w-11/12"
        >
          <PortfolioVideo />
          <Artwork
            openImg={openImg}
            sendImgForOpenArtwork={(img) => setImgForOpen(img)}
            sendOpenImgArtwork={(data) => setOpenImg(data)}
            sendTxtShowImgArtwork={(txt) => setTxtShowImg(txt)}
          />
          <Activities
            openImg={openImg}
            sendImgForOpenActivities={(img) => setImgForOpen(img)}
            sendOpenImgActivities={(data) => setOpenImg(data)}
            sendTxtShowImgActivities={(txt) => setTxtShowImg(txt)}
          />

          <div className="space-y-10">
            <ProgrammingLanguages />
            <FrameworksLibraries />
            {/* <Databases /> */}
            {/* <DevOps /> */}
            <Tools />
          </div>

          <DisplayListProjects />
          <DisplayProjects
            openImg={openImg}
            sendImgForOpenProjects={(img) => setImgForOpen(img)}
            sendOpenImgProjects={(data) => setOpenImg(data)}
            sendTxtShowImgProjects={(txt) => setTxtShowImg(txt)}
          />

          <Certificate
            sendOpenImg={() => setOpenImg(true)}
            sendImg={(img) => setImgForOpen(img)}
            sendTxt={(txt) => setTxtShowImg(txt)}
          />
        </div>
      </div>
      <ShowImgFull
        openImg={openImg}
        imgForOpen={imgForOpen}
        txt={txtShowImg}
        sendOpenImg={(data) => setOpenImg(data)}
      />
    </>
  );
}

export default Page;
