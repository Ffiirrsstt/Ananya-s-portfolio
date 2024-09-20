"use client";

import Nav from "../components/components/Nav";
import ShowImgFull from "../components/components/ShowImgFull";
import Link from "next/link";
import { useState } from "react";

import Skills from "../components/Skills/Skills";
import Certificate from "../components/Skills/Certificate";

import DisplayListProjects from "../components/Skills/DisplayListProjects";
import DisplayProjects from "../components/Skills/DisplayProjects";
import PortfolioVideo from "../components/Skills/PortfolioVideo";
import Artwork from "../components/Skills/Artwork";
import Activities from "../components/Skills/Activities";

function Page() {
  const [openImg, setOpenImg] = useState(false);
  const [imgForOpen, setImgForOpen] = useState();
  const [txtShowImg, setTxtShowImg] = useState("");

  return (
    <>
      <div className="bg-[#263a44]">
        <Nav />
        <div
          className="py-20 flex-1 mx-auto space-y-20 bg-[#ececec] flex flex-col 
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

          <Skills />

          <DisplayListProjects />
          <DisplayProjects openImg={openImg} />

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
