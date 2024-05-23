"use client";

import Head from "next/head";
import Nav from "../components/Nav";
import ImageVideoSlider from "../components/ImageVideoSlider";
import Certificate from "../components/Certificate";
import PageProject from "../components/PageProject";
import ProjectSlider from "../components/ProjectSlider";
import ShowImgFull from "../components/ShowImgFull";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { imageDataActivities, txtDataActivities } from "../database/Activity";
import { imageDataArtwork } from "../database/Artwork";
import {
  imageDataProject,
  txtDataProject,
  linkProject,
  titleProject,
  languagesProject,
  languagesProjectData,
  youtubeData,
} from "../database/ImportSkills";

function page() {
  const [pageActivities, setPageActivities] = useState(0);
  const [pageArtwork, setPageArtwork] = useState(0);
  const [pageProject, setPageProject] = useState(0);
  const [pageVideo, setPageVideo] = useState(0);

  const [hideReadProject, setHideReadProject] = useState(true);

  const [openImg, setOpenImg] = useState(false);
  const [imgForOpen, setImgForOpen] = useState();
  const [txtShowImg, setTxtShowImg] = useState("");
  const [numListProject, setNumListProject] = useState(3);
  const [listProject, setListProject] = useState(true);

  return (
    <>
      <div className="bg-[#263a44]">
        <Nav />
        <div
          className="py-20 flex-1 mx-auto space-y-20 bg-[#ececec] flex flex-col 
        md:w-11/12"
        >
          <div>
            <h2 className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black">
              Portfolio Video
            </h2>
            <ImageVideoSlider
              youtube={true}
              page={pageVideo}
              datatotal={youtubeData}
              sendPage={(data) => setPageVideo(data)}
              titleImg={"Portfolio Video"}
              openImg={openImg}
              sendImgForOpen={(img) => setImgForOpen(img)}
              sendOpenImg={(data) => setOpenImg(data)}
              sendTxtShowImg={(txt) => setTxtShowImg(txt)}
            />
          </div>
          <div>
            <h2 className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black">
              Artwork
            </h2>
            <ImageVideoSlider
              youtube={false}
              page={pageArtwork}
              datatotal={imageDataArtwork}
              sendPage={(data) => setPageArtwork(data)}
              titleImg={"Artwork images"}
              openImg={openImg}
              sendImgForOpen={(img) => setImgForOpen(img)}
              sendOpenImg={(data) => setOpenImg(data)}
              sendTxtShowImg={(txt) => setTxtShowImg(txt)}
            />
          </div>
          <div>
            <h2 className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black">
              Activities
            </h2>
            <h4 className="text-lg md:h-24 lg:h-16  mx-8 lg:mx-20">
              {txtDataActivities[pageActivities]}
            </h4>
            <ImageVideoSlider
              youtube={false}
              page={pageActivities}
              datatotal={imageDataActivities}
              sendPage={(data) => setPageActivities(data)}
              titleImg={"Event photos"}
              openImg={openImg}
              sendImgForOpen={(img) => setImgForOpen(img)}
              sendOpenImg={(data) => setOpenImg(data)}
              sendTxtShowImg={(txt) => setTxtShowImg(txt)}
            />
          </div>

          <div className="mx-8 lg:mx-20">
            <h2 className="my-2 font-bold text-3xl block border-b border-black">
              Skills
            </h2>
            <div className="flex flex-wrap w-full h-full">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                className="w-16"
                alt="C"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
                className="w-16"
                alt="C++"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
                className="w-16"
                alt="C#"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                className="w-16"
                alt="JavaScript"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                className="w-16"
                alt="TypeScript"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                className="w-16"
                alt="HTML5"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                className="w-16"
                alt="CSS3"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                className="w-16"
                alt="TailwindCSS"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                className="w-16"
                alt="Bootstrap"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                className="w-16"
                alt="Vue"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
                className="w-16"
                alt="Nuxtjs"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                className="w-16"
                alt="React"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                className="w-16"
                alt="NextJs"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                className="w-16"
                alt="Vite"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                className="w-16"
                alt="NodeJS"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                className="w-16"
                alt="Express"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                className="w-16"
                alt="Python"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg"
                className="w-16"
                alt="Fast API"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                className="w-16"
                alt="MongoDB"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
                className="w-16"
                alt=".NET"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg"
                className="w-16"
                alt="VS Code"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                className="w-16"
                alt="Figma"
              />

              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg"
                className="w-16"
                alt="Arduino"
              />
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                className="w-16"
                alt="Photoshop"
              />
            </div>
          </div>

          <div>
            <h2 className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black">
              Display the list of projects
            </h2>
            <h4 className="text-lg  mx-8 lg:mx-20">
              {titleProject.slice(0, numListProject).map((title, index) => (
                <div key={index} className="flex h-48 mb-6 shadow-md">
                  <h4
                    className="w-24 bg-[#263a44] w-full h-full text-white
                  flex items-center justify-center rounded-l-lg text-2xl"
                  >
                    {index + 1}
                  </h4>
                  <div className="flex flex-col py-2 px-6 w-full ">
                    <h5 className="flex-1 flex items-center">{title}</h5>
                    <div
                      className="flex-1 flex flex-col md:flex-row 
                    items-start md:items-center"
                    >
                      <div className="flex-1 flex items-center">
                        <h6 className="w-48">Project number : {index + 1}</h6>
                        <Link href={`${linkProject[index]}`} target="_blank">
                          <h6 className="text-blue-700 hover:text-blue-400">
                            Click!
                          </h6>
                        </Link>
                      </div>
                      <div
                        className="flex justify-end 
                         items-center space-x-5 bg-[#263a44] py-2 px-16 md:px-8 rounded-full"
                      >
                        {languagesProject[index].map((data, index) => (
                          <div key={index}>
                            {data === "python" && (
                              <Image
                                src={languagesProjectData.python.src}
                                alt={languagesProjectData.python.title}
                                width={55}
                                height={55}
                                className="w-6 md:w-8 lg:w-10"
                              />
                            )}
                            {data === "js" && (
                              <Image
                                src={languagesProjectData.js.src}
                                alt={languagesProjectData.js.title}
                                width={43}
                                height={43}
                                className="w-6 md:w-8 lg:w-10"
                              />
                            )}
                            {data === "html" && (
                              <Image
                                src={languagesProjectData.html.src}
                                alt={languagesProjectData.html.title}
                                width={52}
                                height={52}
                                className="w-6 md:w-8 lg:w-10"
                              />
                            )}
                            {data === "css" && (
                              <Image
                                src={languagesProjectData.css.src}
                                alt={languagesProjectData.css.title}
                                width={48}
                                height={48}
                                className="w-6 md:w-8 lg:w-10"
                              />
                            )}
                            {data === "figma" && (
                              <Image
                                src={languagesProjectData.figma.src}
                                alt={languagesProjectData.figma.title}
                                width={52}
                                height={52}
                                className="w-6 md:w-8 lg:w-10"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex h-12 md:h-16 lg:h-24 mb-6 shadow-md items-center justify-center
                text-[#0088b1] hover:text-[#47abcb] cursor-pointer"
                onClick={() => {
                  setListProject(!listProject);
                  numListProject === 3
                    ? setNumListProject(titleProject.length)
                    : setNumListProject(3);
                }}
              >
                <h6 className="text-3xl cursor-pointer">
                  {listProject ? ". . .Show more. . ." : ". . .Hide. . ."}
                </h6>
              </div>
            </h4>
          </div>
          <div className="mx-8 lg:mx-20">
            <h2 className="my-2 font-bold text-3xl block border-b border-black">
              Project
            </h2>
            <h4 className="text-lg min-h-60 md:min-h-40 lg:min-h-32">
              {txtDataProject[pageProject]}
            </h4>
            <Link href={`${linkProject[pageProject]}`} target="_blank">
              <h6 className="hover:text-gray-700">
                {titleProject[pageProject]}
                <p className="text-blue-700 hover:text-blue-400 inline ml-5">
                  - &gt; click!
                </p>
              </h6>
            </Link>

            <div
              className="flex flex-col md:flex-row items-start md:items-center justify-between 
            cursor-pointer"
            >
              <h5
                className="font-light text-[rgb(120,120,120)] hover:text-black"
                onClick={() => setHideReadProject(!hideReadProject)}
              >
                {hideReadProject
                  ? "Reviewing this project's outcomes more intensively..."
                  : "Conceal the results of this project."}
              </h5>
              <PageProject
                dataArray={imageDataProject}
                curPage={pageProject}
                sendPage={(dataPage) => setPageProject(dataPage)}
                sendResetReadHide={(data) => setHideReadProject(data)}
              />
            </div>

            {hideReadProject ? (
              <ProjectSlider
                dataArray={imageDataProject[pageProject].slice(0, 4)}
                txt={txtDataProject[pageProject]}
                sendImgForOpen={(img) => setImgForOpen(img)}
                sendOpenImg={(data) => setOpenImg(data)}
                sendTxtShowImg={(txt) => setTxtShowImg(txt)}
              />
            ) : (
              <ProjectSlider
                dataArray={imageDataProject[pageProject]}
                txt={txtDataProject[pageProject]}
                sendImgForOpen={(img) => setImgForOpen(img)}
                sendOpenImg={(data) => setOpenImg(data)}
                sendTxtShowImg={(txt) => setTxtShowImg(txt)}
              />
            )}

            {
              <div
                className="bg-[#e1e1e1] h-12 md:h-16 lg:h-24 flex justify-center items-center rounded-b-lg"
                onClick={() => setHideReadProject(!hideReadProject)}
              >
                <h6
                  className="text-3xl min-h-fit text-[#0088b1]
                  hover:text-[#47abcb] cursor-pointer"
                >
                  {hideReadProject ? ". . .Show more. . ." : ". . .Hide. . ."}
                </h6>
              </div>
            }

            {!hideReadProject && (
              <PageProject
                dataArray={imageDataProject}
                curPage={pageProject}
                openImg={openImg}
                sendPage={(dataPage) => setPageProject(dataPage)}
                sendResetReadHide={(data) => setHideReadProject(data)}
              />
            )}
          </div>

          <div className="">
            <Certificate
              sendOpenImg={() => setOpenImg(true)}
              sendImg={(img) => setImgForOpen(img)}
              sendTxt={(txt) => setTxtShowImg(txt)}
            />
          </div>
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

export default page;
