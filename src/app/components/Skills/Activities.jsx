import { useState } from "react";
import ImageVideoSlider from "../components/ImageVideoSlider";
import {
  imageDataActivities,
  txtDataActivities,
} from "../../database/Activity";

function Activities(props) {
  const {
    openImg,
    sendImgForOpenActivities,
    sendOpenImgActivities,
    sendTxtShowImgActivities,
  } = props;

  const [pageActivities, setPageActivities] = useState(0);
  return (
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
        sendImgForOpen={(img) => sendImgForOpenActivities(img)}
        sendOpenImg={(data) => sendOpenImgActivities(data)}
        sendTxtShowImg={(txt) => sendTxtShowImgActivities(txt)}
      />
    </div>
  );
}

export default Activities;
