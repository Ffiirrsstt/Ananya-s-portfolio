import Image from "next/image";

function FrameworksLibraries() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        Frameworks & Libraries
      </h2>
      <div className="flex flex-wrap w-full h-full">
        <Image
          src="https://www.safike.com/assets/img/technologies/ANGULAR.png"
          width={64}
          height={64}
          alt="Angular"
          title="Angular"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          width={64}
          height={64}
          alt="React"
          title="React"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
          width={64}
          height={64}
          alt="NextJs"
          title="NextJs"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          width={64}
          height={64}
          alt="Vue"
          title="Vue"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
          width={64}
          height={64}
          alt="Nuxtjs"
          title="Nuxtjs"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
          width={64}
          height={64}
          alt="ASP.NET"
          title="ASP.NET"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          width={64}
          height={64}
          alt="NodeJS"
          title="NodeJS"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
          width={64}
          height={64}
          alt="Express"
          title="Express"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg"
          width={64}
          height={64}
          alt="Fast API"
          title="Fast API"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          width={64}
          height={64}
          alt="TailwindCSS"
          title="TailwindCSS"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          width={64}
          height={64}
          alt="Bootstrap"
          title="Bootstrap"
        />
      </div>
    </div>
  );
}

export default FrameworksLibraries;
