"use client";

import { dataAllTotal } from "../../Services/cerificate/data-calculation";
import Image from "next/image";
import { useEffect, useState } from "react";

import React from "react";
import { setCertificateFromSelect } from "../../Services/cerificate/set-certificate";

function Certificate({ sendOpenImg, sendImg, sendTxt }) {
  const [certificate, setCertificate] = useState(dataAllTotal);
  const [selectcertificate, setSelectcertificate] = useState("All");
  const [selectlatestRelevance, setSelectlatestRelevance] =
    useState("relevance");

  useEffect(() => {
    const dataSet = setCertificateFromSelect(
      selectlatestRelevance,
      selectcertificate
    );
    setCertificate(dataSet);
  }, [selectcertificate, selectlatestRelevance]);
  return (
    <>
      <div>
        <div
          className="mx-8 lg:mx-20 my-2 font-bold border-b border-black
        flex md:flex-row flex-col"
        >
          <h2 className="flex-1 text-3xl block">Certificate</h2>
          <div className="flex-1 flex space-x-5 mt-2 md:mt0 justify-between md:justify-end ">
            <select
              name="latestRelevance"
              className="rounded-lg px-4 mb-2 text-xl focus:outline-none text-center cursor-pointer"
              onChange={(e) => setSelectlatestRelevance(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="latest">Latest</option>
            </select>
            <select
              name="Certificate"
              className="w-full rounded-lg px-2 mb-2 text-xl focus:outline-none text-center cursor-pointer"
              onChange={(e) => setSelectcertificate(e.target.value)}
            >
              <option value="All">All</option>
              <option value="certificateToo">
                Technology and Software tools
              </option>
              <option value="certificateCloud">Cloud computing</option>
              <option value="certificateDevOps">DevOps</option>
              <option value="certificateSoftwareArchitecture">
                Software Architecture
              </option>
              <option value="certificateSkills">
                Computational Skills or Literacy
              </option>
              <option value="certificateLanguages">
                Programming Languages
              </option>
              <option value="certificateIotAi">IoT and AI</option>
              <option value="certificateOthers">Others</option>
            </select>
          </div>
        </div>
        <div className="mx-8 lg:mx-20">
          {certificate &&
            certificate.map((data, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col w-full md:h-72 items-center 
              space-y-5 md:space-y-0 md:space-x-2 lg:space-x-20 mb-10 md:mb-2  mt-5 md:mt-0"
              >
                <Image
                  src={data.img}
                  className="w-4/5 md:w-1/2 lg:w-2/5 h-full cursor-pointer"
                  title={data.txt}
                  alt={data.txt}
                  onClick={() => {
                    sendOpenImg();
                    sendImg(data.img);
                    sendTxt(data.txt);
                  }}
                />
                <div
                  className="flex-1 w-4/5 h-full flex flex-col space-y-5
                  items-center justify-center shadow-lg text-center p-5
                "
                >
                  <h2 className="text-2xl font-bold border-b border-gray-400 pb-2">
                    {data.txt}
                  </h2>
                  <h3 className="text-2xl">{data.from}</h3>
                  <h4 className="text-lg">{data.date}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Certificate;
