import { imageDataProject } from "../../../database/projects/projects-images";
import { txtDataProject } from "../../../database/projects/projects-txt";
import { titleProject } from "../../../database/projects-list/projects-title";
import { linkProject } from "../../../database/projects-list/projects-link";

import Link from "next/link";
import PageProject from "./PageProject";
import ProjectSlider from "./ProjectSlider";
import { useRef, useState } from "react";

function DisplayProjects(props) {
  const {
    openImg,
    sendImgForOpenProjects,
    sendOpenImgProjects,
    sendTxtShowImgProjects,
  } = props;
  const [pageProject, setPageProject] = useState(0);
  const [hideReadProject, setHideReadProject] = useState(true);

  const refProjects = useRef(null); // สร้าง reference สำหรับ <h2> ที่แสดง Project

  const scrollToProject = () => {
    {
      if (!hideReadProject)
        refProjects.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }); // เลื่อนลงไปที่ refListProjects และให้มันอยู่กึ่งกลางหน้าจอ}
    }
  };
  return (
    <div className="mx-8 lg:mx-20">
      <h2
        ref={refProjects}
        className="my-2 font-bold text-3xl block border-b border-black"
      >
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
          //ใส่ไม่ให้ขึ้นแจ้ง error แต่มันอยู่ด้านบนอยู่แล้ว ไม่ต้องสกอร์บาร์ขึ้น
          sendScrollToProject={() => {}}
        />
      </div>

      {hideReadProject ? (
        <ProjectSlider
          dataArray={imageDataProject[pageProject].slice(0, 4)}
          txt={txtDataProject[pageProject]}
          sendImgForOpen={(img) => sendImgForOpenProjects(img)}
          sendOpenImg={(data) => sendOpenImgProjects(data)}
          sendTxtShowImg={(txt) => sendTxtShowImgProjects(txt)}
        />
      ) : (
        <ProjectSlider
          dataArray={imageDataProject[pageProject]}
          txt={txtDataProject[pageProject]}
          sendImgForOpen={(img) => sendImgForOpenProjects(img)}
          sendOpenImg={(data) => sendOpenImgProjects(data)}
          sendTxtShowImg={(txt) => sendTxtShowImgProjects(txt)}
        />
      )}

      {
        <div
          className="bg-[#e1e1e1] h-12 md:h-16 lg:h-24 flex justify-center items-center rounded-b-lg"
          onClick={() => {
            setHideReadProject(!hideReadProject);
            scrollToProject();
          }}
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
          sendScrollToProject={() => scrollToProject()}
        />
      )}
    </div>
  );
}

export default DisplayProjects;
