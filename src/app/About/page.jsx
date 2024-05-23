import me_about from "../../../public/me-about.jpg";
import Image from "next/image";
import Nav from "../components/Nav";

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex flex-row w-full h-full">
        <div className="w-2/5 h-full bg-[#ececec] flex flex-col justify-center">
          <div className="h-4/5 w-full flex items-center">
            <div className="flex h-full w-full items-center bg-[#263a44] rounded-b justify-center border-b border-black">
              <Image src={me_about} className="md:w-3/5 h-4/5 rounded" />
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex-1 my-5 mx-10">
              <h4 className="font-bold text-base md:text-xl border-b border-black">
                Hobbies:{" "}
              </h4>
              <h5 className="pt-2 text-base">
                Exercising, Learning topics of interest from YouTube,
                FutureSkill, and universities offering free courses to
                non-students
              </h5>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-[#e1e1e1]">
          <h2 className="font-bold text-4xl my-5 py-5 pl-2 ml-5 rounded-l bg-[#d0d0d0]">
            Personal Profile :
          </h2>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Name: </h3>
            <h4 className="text-xl md:text-2xl">Miss Ananya Sae-Tae (First)</h4>
          </div>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Date of Birth: </h3>
            <h4 className="text-xl md:text-2xl">April 10, 2004</h4>
          </div>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Age: </h3>
            <h4 className="text-xl md:text-2xl">20 years old</h4>
          </div>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Ethnicity: </h3>
            <h4 className="text-xl md:text-2xl">Chinese</h4>
          </div>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Nationality: </h3>
            <h4 className="text-xl md:text-2xl">Thai</h4>
          </div>
          <div className="flex flex-1 items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Religion: </h3>
            <h4 className="text-xl md:text-2xl">Buddhist</h4>
          </div>
          <div className="flex flex-1  items-center justify-between p-5 h-10 w-full">
            <h3 className="font-bold text-xl md:text-2xl">Phone Number: </h3>
            <h4 className="text-xl md:text-2xl">095-965-1579</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
