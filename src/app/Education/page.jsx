"use client";

import Nav from "../components/components/Nav";
import Image from "next/image";
import ShowImgFull from "../components/components/ShowImgFull";
import secondary_School_1 from "../../../public/Secondary-School-Academic-Achievements-page-1.jpg";
import secondary_School_2 from "../../../public/Secondary-School-Academic-Achievements-page-2.jpg";
import university_1 from "../../../public/academic-Achievements-at-the-University-Level-page-1.png";
import university_2 from "../../../public/academic-Achievements-at-the-University-Level-page-2.png";
import { useState } from "react";
function Page() {
  const [openImg, setOpenImg] = useState(false);
  const [imgForOpen, setImgForOpen] = useState();
  const [txtShowImg, setTxtShowImg] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#263a44]">
      <Nav />
      <div
        className="py-20 flex-1 mx-auto space-y-20 bg-[#ececec] flex flex-col 
        md:w-11/12"
      >
        <div className="mx-8 lg:mx-20 flex flex-col space-y-8">
          <ul>
            <h2 className="mb-10 font-bold text-2xl lg:text-3xl block border-b border-black">
              Educational Background
            </h2>
            <li className="md:ml-8 lg:ml-20">
              <div className="flex flex-col md:flex-row items-center justify-between my-8 font-bold text-lg md:text-2xl border-b border-black">
                <h3>Academic Achievements at the University Level</h3>
                <h3 className="w-full text-center md:w-fit mb-2 py-2 px-6 bg-[#263a44] rounded-lg text-white">
                  GPA : 4.00
                </h3>
              </div>
              <div className="flex flex-col w-full items-center">
                <Image
                  src={university_1}
                  alt="Academic Achievements at the University Level page 1"
                  className="cursor-pointer min-h-fit w-2/3 pb-2"
                  onClick={() => {
                    setTxtShowImg(
                      "Academic Achievements at the University Level page 1"
                    );
                    setImgForOpen(university_1);
                    setOpenImg(true);
                  }}
                />
                <Image
                  src={university_2}
                  alt="Academic Achievements at the University Level page 2"
                  className="cursor-pointer min-h-fit w-2/3"
                  onClick={() => {
                    setTxtShowImg(
                      "Academic Achievements at the University Level page 2"
                    );
                    setImgForOpen(university_2);
                    setOpenImg(true);
                  }}
                />
              </div>
            </li>
            <li className="md:ml-8 lg:ml-20">
              <div
                className="flex flex-col md:flex-row items-center justify-between my-8 font-bold 
              text-lg md:text-2xl border-b border-black"
              >
                <h3>Secondary School Academic Achievements</h3>
                <h3 className="w-full text-center md:w-fit mb-2 py-2 px-6 bg-[#263a44] rounded-lg text-white">
                  GPA : 3.70
                </h3>
              </div>

              <div className="flex flex-col w-full min-h-screen items-center">
                <Image
                  src={secondary_School_1}
                  alt="Secondary School Academic Achievements page 1"
                  className="cursor-pointer min-h-fit w-2/3 pb-2"
                  onClick={() => {
                    setTxtShowImg(
                      "Secondary School Academic Achievements page 1"
                    );
                    setImgForOpen(secondary_School_1);
                    setOpenImg(true);
                  }}
                />
                <Image
                  src={secondary_School_2}
                  alt="Secondary School Academic Achievements page 2"
                  className="cursor-pointer min-h-fit w-2/3"
                  onClick={() => {
                    setTxtShowImg(
                      "Secondary School Academic Achievements page 2"
                    );
                    setImgForOpen(secondary_School_2);
                    setOpenImg(true);
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ShowImgFull
        openImg={openImg}
        imgForOpen={imgForOpen}
        txt={txtShowImg}
        sendOpenImg={(data) => setOpenImg(data)}
      />
    </div>
  );
}

export default Page;
