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
    // ถ้ากดตรงอื่นยกเว้นตรงรูปภาพจะทำการปิดรูปน่ะ
    <>
      {openImg && (
        <div
          className="fixed top-0 w-screen h-screen bg-black bg-opacity-40 
        flex items-center justify-center z-30"
          onClick={() => sendOpenImg(false)}
        >
          <div
            className={`${
              dataforImg ? "py-10 h-full w-2/5" : "h-3/4 w-3/4"
            } rounded relative `}
          >
            {/* ปุ่มปิด */}
            <GrFormClose
              className="absolute top-1 right-1 text-8xl p-3 cursor-pointer
      text-gray-400 hover:text-gray-300  z-40
      transition-colors duration-100 ease-in-out"
            />

            <Image
              className="h-full w-full"
              src={imgForOpen}
              alt={txt}
              loading="lazy"
              onClick={(e) => {
                e.stopPropagation(); // หยุดการกระจาย event ไปยัง div แม่
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ShowImgFull;
