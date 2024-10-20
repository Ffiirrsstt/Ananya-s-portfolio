import Image from "next/image";

function ProjectSlider(props) {
  const {
    dataArray,
    txt,
    openImg,
    sendImgForOpen,
    sendOpenImg,
    sendTxtShowImg,
  } = props;
  return (
    <div className="h-full flex">
      <div className="h-full w-full flex flex-wrap space-y-1">
        {dataArray.map((data, index) => (
          <Image
            key={index}
            className="h-full w-1/2 cursor-pointer"
            src={data}
            alt={txt}
            loading="lazy"
            onClick={() => {
              sendImgForOpen(data);
              sendTxtShowImg(txt);
              sendOpenImg(!openImg);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;
