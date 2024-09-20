import Image from "next/image";

function Tools() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        Tools
      </h2>
      <div className="flex flex-wrap w-full h-full">
        <Image
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
          width={64}
          height={64}
          alt="Docker"
          title="Docker"
        />
        <Image
          src="https://capnis.com/public/uploads/320862174.png"
          width={64}
          height={64}
          alt="Kubernetes"
          title="Kubernetes"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          width={64}
          height={64}
          alt="Figma"
          title="Figma"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg"
          width={64}
          height={64}
          alt="Visual Studio Code"
          title="Visual Studio Code"
        />
        <Image
          src="https://th.bing.com/th/id/R.b31292a20687fd5eabb27b3cb36b7df5?rik=1UM6FZWE6qKkGw&pid=ImgRaw&r=0"
          width={64}
          height={64}
          alt="Visual Studio"
          title="Visual Studio"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg"
          width={64}
          height={64}
          alt="Arduino"
          title="Arduino"
        />
        <Image
          src="https://th.bing.com/th/id/OIP.dKvyA9n3lymqch0LdTX1IQAAAA?rs=1&pid=ImgDetMain"
          width={64}
          height={64}
          alt="Davinci Resolve"
          title="Davinci Resolve"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
          width={64}
          height={64}
          alt="Photoshop"
          title="Photoshop"
        />
      </div>
    </div>
  );
}

export default Tools;
