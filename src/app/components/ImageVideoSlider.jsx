import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function ImageSlider(props) {
  const {
    youtube,
    page,
    datatotal,
    sendPage,
    titleImg,
    openImg,
    sendImgForOpen,
    sendOpenImg,
    sendTxtShowImg,
  } = props;

  return (
    <div className="flex h-96 items-center my-5">
      {!(page === 0) ? (
        <GrPrevious
          onClick={() => sendPage(page - 1)}
          className="text-6xl w-8 lg:w-20 text-[#0088b1] cursor-pointer"
        />
      ) : (
        <div className="w-8 lg:w-20"></div>
      )}
      <div className="flex h-full w-full">
        {!youtube &&
          datatotal[page].map((img, indexImg) => (
            <div key={indexImg} className="flex-1">
              <Image
                className="h-full w-full cursor-pointer"
                src={img}
                alt={titleImg}
                loading="lazy"
                onClick={() => {
                  sendImgForOpen(img);
                  sendTxtShowImg(titleImg);
                  sendOpenImg(!openImg);
                }}
              />
            </div>
          ))}
        {!youtube && datatotal[page].length < 3 && (
          <div className="flex-1"></div>
        )}

        {youtube &&
          datatotal[page].map((data, indexImg) => (
            <div key={indexImg} className="flex-1">
              <iframe
                className="flex-1 w-full h-full"
                src={data.src}
                title={data.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        {youtube && datatotal[page].length < 2 && (
          <div className="flex-1"></div>
        )}
      </div>
      {datatotal.length - 1 > page ? (
        <GrNext
          onClick={() => sendPage(page + 1)}
          className="text-6xl w-8 lg:w-20 
          text-[#0088b1] hover:text-[#47abcb] cursor-pointer"
        />
      ) : (
        <div className="w-8 lg:w-20"></div>
      )}
    </div>
  );
}

export default ImageSlider;
