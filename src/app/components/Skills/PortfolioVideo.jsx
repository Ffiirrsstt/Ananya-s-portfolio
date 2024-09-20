import { useState } from "react";
import ImageVideoSlider from "../components/ImageVideoSlider";

import { youtubeData } from "../../database/Youtube";

function PortfolioVideo() {
  const [pageVideo, setPageVideo] = useState(0);
  const [openImg, setOpenImg] = useState(false);

  return (
    <div>
      <h2 className="mx-8 lg:mx-20 my-2 font-bold text-3xl block border-b border-black">
        Portfolio Video
      </h2>

      <ImageVideoSlider
        youtube={true}
        datatotal={youtubeData}
        page={pageVideo}
        sendPage={(data) => setPageVideo(data)}
        titleImg={"Portfolio Video"}
        // openImg={openImg}
        // sendImgForOpen={(img) => setImgForOpen(img)}
        // sendOpenImg={(data) => setOpenImg(data)}
        // sendTxtShowImg={(txt) => setTxtShowImg(txt)}
      />
    </div>
  );
}

export default PortfolioVideo;
