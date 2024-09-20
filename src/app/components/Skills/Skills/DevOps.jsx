import Image from "next/image";

function DevOps() {
  return (
    <div className="mx-8 lg:mx-20">
      <h2 className="my-2 font-bold text-3xl block border-b border-black">
        DevOps
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
      </div>
    </div>
  );
}

export default DevOps;
