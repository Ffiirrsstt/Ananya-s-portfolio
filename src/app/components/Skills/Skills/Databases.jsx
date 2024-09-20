import Image from "next/image";

function Databases() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        Databases
      </h2>
      <div className="flex flex-wrap w-full h-full">
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

export default Databases;
