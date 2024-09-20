import Image from "next/image";
import imgMe from "../../public/me.jpg";
import Nav from "./components/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#263a44]">
      <Nav />
      <div
        className="flex-1 mx-auto  bg-[#ececec] flex flex-col md:flex-row items-center 
      md:px-5 md:lg:px-20  md:w-11/12 md:space-x-5 lg:space-x-20 h-3/5"
      >
        <Image
          src={imgMe}
          alt="Picture of Miss Ananya Sae-Tae"
          className="w-full md:w-1/2 lg:w-1/3 md:h-3/4"
        />
        <div className="flex flex-col md:w-1/2 lg:w-2/3 md:h-3/4 space-y-0 md:space-y-5 overflow-auto">
          <h2 className="w-full my-10 md:m-0 md:h-1/3 text-lg overflow-auto p-4 rounded-lg bg-[#e1e1e1]">
            Hello, my name is Miss Annya Saetae. I am currently 20 years old and
            studying at Rangsit University, Faculty of Engineering, majoring in
            Computer Engineering. I am in my third semester. I am interested in
            pursuing a career as a full stack developer and am currently
            exploring Next.js.
          </h2>
          <div className="flex-1 flex flex-col">
            <h3 className="pb-2 text-base font-medium pl-2 md:pl-0">
              Presentation video of the portfolio I have created :
            </h3>
            <div className="flex-1">
              <iframe
                className="w-full h-96 md:h-full mb-10 md:mb-0"
                src="https://www.youtube.com/embed/AVT6_65WJCw"
                title="Project : My profile homepage"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
