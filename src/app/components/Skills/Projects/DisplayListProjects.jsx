import Image from "next/image";
import Link from "next/link";
import {
  linkProject,
  titleProject,
  languagesProject,
  languagesProjectData,
} from "../../../database/ImportSkills";
import { useRef, useState } from "react";

function DisplayListProjects() {
  const [numListProject, setNumListProject] = useState(3);
  const [listProject, setListProject] = useState(true);

  const refListProjects = useRef(null);

  const scrollToProject = () => {
    {
      if (!listProject)
        refListProjects.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }); // เลื่อนลงไปที่ refListProjects และให้มันอยู่กึ่งกลางหน้าจอ}
    }
  };
  return (
    <div>
      <h2
        className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black"
        ref={refListProjects}
      >
        Display the list of projects
      </h2>
      <h4 className="text-lg  mx-8 lg:mx-20">
        {titleProject.slice(0, numListProject).map((title, index) => (
          <div key={index} className="flex h-48 mb-6 shadow-md">
            <h4
              className="w-24 bg-[#263a44] h-full text-white
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
            scrollToProject();
          }}
        >
          <h6 className="text-3xl cursor-pointer">
            {listProject ? ". . .Show more. . ." : ". . .Hide. . ."}
          </h6>
        </div>
      </h4>
    </div>
  );
}

export default DisplayListProjects;
