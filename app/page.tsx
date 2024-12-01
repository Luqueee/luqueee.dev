import Link from "next/link";
import Github from "./components/icons/Github";
import Image from "next/image";
import Instagram from "./components/icons/Instagram";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 ">
      <div className="overflow-hidden rounded-full">
        <Image
          src="/yo.jpg"
          alt="Adrià Cabrera Luque"
          width={200}
          height={200}
          className=" hover:scale-110 object-cover transition-all duration-500 object-center select-none"
          draggable={false}
        />
      </div>

      <h1 className="text-4xl font-[500]">Adrià Cabrera Luque</h1>
      <div>
        <div className="inline-flex gap-4 items-center">
          <Link href="https://github.com/Luqueee" target="_blank">
            <Github className="hover:scale-110 transition-all duration-200 opacity-100" />
          </Link>
          <Link
            href="https://www.instagram.com/adria.cabreraa/"
            target="_blank"
          >
            <Instagram className="hover:scale-110 transition-all duration-200 opacity-100" />
          </Link>
        </div>
      </div>
      <p className="border-b border-primary ">
        Se que la web es mu fea esta en desarrollo {": )"}
      </p>
    </div>
  );
}
