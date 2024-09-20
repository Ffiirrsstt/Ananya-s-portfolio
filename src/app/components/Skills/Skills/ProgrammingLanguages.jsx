import Image from "next/image";

function ProgrammingLanguages() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        Programming Languages & Databases
      </h2>
      <div className="flex flex-wrap w-full h-full">
        {/* Image เทียบกับ Image จะช่วยปรับปรุงประสิทธิภาพการโหลดภาพและลดการใช้แบนด์วิธ */}
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
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
          width={64}
          height={64}
          alt="Python"
          title="Python"
        />
        <Image
          src="https://download.logo.wine/logo/Go_(programming_language)/Go_(programming_language)-Logo.wine.png"
          width={64}
          height={64}
          alt="Go"
          title="Go"
        />
        <Image
          src="https://th.bing.com/th/id/R.b25bae44ff516c7dcc3eacdb14d2c499?rik=5rI66KCDGmJOgQ&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1499955337microsoft-sql-server-logo-png.png&ehk=cFGE%2f%2fesEwqoP90RGgL2BquXFkUt7z4aF%2bLwj4hQ6GA%3d&risl=&pid=ImgRaw&r=0"
          width={64}
          height={64}
          alt="SQL Server"
          title="SQL Server"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          width={64}
          height={64}
          alt="MongoDB"
          title="MongoDB"
        />
      </div>
    </div>
  );
}

export default ProgrammingLanguages;
