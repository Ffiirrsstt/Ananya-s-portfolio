"use client";

import { GrFormClose } from "react-icons/gr";
import Image from "next/image";

function ShowImgFull(props) {
  const { openImg, imgForOpen, txt, sendOpenImg } = props;

  return (
    // ถ้ากดตรงอื่นยกเว้นตรงรูปภาพจะทำการปิดรูปน่ะ
    <>
      {openImg && (
        <div
          className="fixed top-0 w-screen h-screen bg-black bg-opacity-40 
        flex items-center justify-center z-30"
          onClick={() => sendOpenImg(false)}
        >
          {/* ปุ่มปิด */}
          <GrFormClose
            className="fixed top-1 right-1 text-8xl p-3 cursor-pointer
      text-gray-400 hover:text-gray-300  z-40
      transition-colors duration-100 ease-in-out"
            onClick={() => sendOpenImg(false)}
          />

          <div
            className=" bg-[var(--bg-img)] m-24"
            onClick={(e) => e.stopPropagation()} // ป้องกันการคลิกที่ภาพไม่ให้ปิด
          >
            <Image
              className="rounded-md max-w-full max-h-screen object-contain"
              src={imgForOpen}
              alt={txt}
              layout="intrinsic" // ใช้ intrinsic เพื่อให้รูปภาพมีขนาดตามภาพต้นฉบับ
              width={1000}
              height={800}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ShowImgFull;
