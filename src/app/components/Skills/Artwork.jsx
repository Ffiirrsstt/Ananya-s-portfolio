import { useState } from "react";
import ImageVideoSlider from "../components/ImageVideoSlider";
import { imageDataArtwork } from "../../database/Artwork";

function Artwork(props) {
  const {
    openImg,
    sendImgForOpenArtwork,
    sendOpenImgArtwork,
    sendTxtShowImgArtwork,
  } = props;
  const [pageArtwork, setPageArtwork] = useState(0);

  return (
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
        sendImgForOpen={(img) => sendImgForOpenArtwork(img)}
        sendOpenImg={(data) => sendOpenImgArtwork(data)}
        sendTxtShowImg={(txt) => sendTxtShowImgArtwork(txt)}
      />
    </div>
  );
}

export default Artwork;
