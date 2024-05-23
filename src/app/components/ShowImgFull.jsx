"use client";

import { GrFormClose } from "react-icons/gr";
import Image from "next/image";
import { useState } from "react";

function ShowImgFull(props) {
  const { openImg, imgForOpen, txt, sendOpenImg } = props;
  const [dataforImg, setDataforImg] = useState();

  const imgLoad = (e) => {
    const { width, height } = e.target;
    setDataforImg(height > width);
  };
  return (
    <>
      {openImg && (
        <div
          className="fixed top-0 w-screen h-screen bg-black bg-opacity-40 
        flex items-center justify-center"
        >
          <GrFormClose
            className="fixed top-6 right-6 text-8xl 
          text-gray-400 hover:text-gray-300 cursor-pointer shadow-lg"
            onClick={() => sendOpenImg(!openImg)}
          />
          <Image
            className={`${
              dataforImg ? "py-10 h-full w-2/5" : "h-3/4 w-3/4"
            } rounded`}
            src={imgForOpen}
            alt={txt}
            loading="lazy"
          />
          <Image
            className="hidden"
            src={imgForOpen}
            alt={txt}
            loading="lazy"
            onLoad={imgLoad}
          />
        </div>
      )}
    </>
  );
}

export default ShowImgFull;
