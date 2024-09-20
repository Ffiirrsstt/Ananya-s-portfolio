import Image from "next/image";

function Skills() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        Skills
      </h2>
      <div className="flex flex-wrap w-full h-full">
        {/* Image เทียบกับ Image จะช่วยปรับปรุงประสิทธิภาพการโหลดภาพและลดการใช้แบนด์วิธ */}
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
          width={64}
          height={64}
          alt="C"
          title="C"
          priority
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
          width={64}
          height={64}
          alt="C++"
          title="C++"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
          width={64}
          height={64}
          alt="C#"
          title="C#"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          width={64}
          height={64}
          alt="JavaScript"
          title="JavaScript"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          width={64}
          height={64}
          alt="TypeScript"
          title="TypeScript"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          width={64}
          height={64}
          alt="HTML5"
          title="HTML5"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          width={64}
          height={64}
          alt="CSS3"
          title="CSS3"
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
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
          width={64}
          height={64}
          alt="Vite"
          title="Vite"
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
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
          width={64}
          height={64}
          alt="Python"
          title="Python"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg"
          width={64}
          height={64}
          alt="Fast API"
          title="Fast API"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          width={64}
          height={64}
          alt="MongoDB"
          title="MongoDB"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
          width={64}
          height={64}
          alt=".NET"
          title=".NET"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg"
          width={64}
          height={64}
          alt="VS Code"
          title="VS Code"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          width={64}
          height={64}
          alt="Figma"
          title="Figma"
        />

        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg"
          width={64}
          height={64}
          alt="Arduino"
          title="Arduino"
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

export default Skills;
