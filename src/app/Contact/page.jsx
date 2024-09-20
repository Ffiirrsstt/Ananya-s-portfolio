import Nav from "../components/components/Nav";
import Link from "next/link";
import Image from "next/image";

import github from "../../../public/github.png";

function Page() {
  const ContactData = [
    { link: "https://github.com/Ffiirrsstt", src: github, titie: "My GitHub" },
    {
      link: "https://replit.com/@nayyaaaechaet",
      src: "https://replit.com/public/images/sm.png",
      titie: "My Replit",
    },
    {
      link: "https://www.figma.com/proto/R1T8ttOS6DjvL5IRR6uiER/Untitled?node-id=35-633&starting-point-node-id=2%3A13",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      titie: "My Figma",
    },
    {
      link: "https://www.facebook.com/yuki.ri.5201/",
      src: "https://th.bing.com/th/id/R.75045898fadd6463c07f8897ce295ccb?rik=l%2fi6moZpZSCb1Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-mTH_frdZBhY%2fUcWmMLz0_XI%2fAAAAAAAAAJM%2fuBRdEQPQo1w%2fs1600%2flogoFB.png&ehk=edCTiS7ChvkEDt7YMXaXkaeyAif4Xz8biN%2bXT9lHb8w%3d&risl=&pid=ImgRaw&r=0",
      titie: "My Facebook",
    },
    {
      link: "https://www.youtube.com/channel/UCT9zFruLhk2ZBSqTT5F6nwg",
      src: "https://th.bing.com/th/id/R.8a6f52a24bf531497c28fea94f81afd1?rik=jgrX2auCHDIp6A&pid=ImgRaw&r=0",
      titie: "My YouTube",
    },
    {
      link: "https://www.instagram.com/ffiirrsstt_x/?hl=en",
      src: "https://th.bing.com/th/id/R.a4c1b65d1112004a4c2b36993be50aa6?rik=qnhx%2bpmsOgxaAQ&riu=http%3a%2f%2fletr.org%2ffiles%2fiCCustom4_607427.png&ehk=VCRZZ3xlaO0kys7n7BO6EySvrk5NUQSTpMDviCEv6JY%3d&risl=&pid=ImgRaw&r=0",
      titie: "My Instagram",
    },
  ];
  return (
    <div className=" bg-[#263a44]">
      <Nav />
      <div className="flex-1 min-h-auto py-20 mx-auto space-y-20  bg-[#ececec] flex flex-col md:w-11/12">
        <div className="mx-8 lg:mx-20">
          <h2 className="my-2 font-bold text-3xl block border-b border-black">
            Contact
          </h2>
          <div
            className="flex flex-col space-y-5 h-full w-full 
          mb-2 border-b border-black lg:mb-0 lg:border-0"
          >
            {ContactData.map((data, index) => (
              <div key={index} className="flex space-x-5 lg:space-x-10">
                <Link href={data.link} target="_blank">
                  <Image
                    src={data.src}
                    alt={data.titie}
                    title={data.titie}
                    width={60}
                    height={60}
                    className="flex-1 w-16 h-16 lg:w-24 lg:h-24 cursor-pointer 
                    transform transition-transform duration-300 ease-in-out hover:scale-125"
                  />
                </Link>
                <div className="flex-1 flex items-center">
                  <h2 className="w-4/12 md:w-3/12 lg:w-1/5">{data.titie} : </h2>
                  <Link
                    href={data.link}
                    className="flex-1 cursor-pointer text-blue-700 hover:text-blue-400"
                    target="_blank"
                  >
                    {data.link.length < 30
                      ? data.link + " Click!"
                      : data.link.substring(0, 30) + "... Click!"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
