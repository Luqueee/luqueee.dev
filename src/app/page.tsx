// import Hero from "../components/Hero";
// import Image from "next/image";
// import { Outfit } from "next/font/google";
// import AnimatedWritterText from "@/components/animations/text/AnimatedWritterText";
// import PullUpText from "@/components/animations/text/PullUpText";
// import Link from "next/link";
// const outfit = Outfit({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });
//import { FlickeringGrid } from "./components/FlickeringGrid";

// const textAbout =
//   "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

// export default function Home() {
//   return (
//     <div className=" min-h-screen">
//       <div className="flex flex-col items-center justify-center relative h-screen gap-8 text-9xl   ">
//         {/* <FlickeringGrid
//         //className="z-0 absolute inset-0 size-full w-full h-[100vh] "
//         className="-z-10 absolute inset-0 size-full w-full h-[150vh] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
//         squareSize={4}
//         gridGap={4}
//         color="#6B7280"
//         maxOpacity={0.2}
//         flickerChance={0.3}
//       /> */}
//         <Hero />
//       </div>
//       <div className="w-full px-12">
//         <h2 className={`${outfit.className} text-6xl w-fit mb-4`}>Sobre mi</h2>
//         <div className="grid grid-cols-[400px_1fr] min-h-20  gap-12">
//           <div className="flex flex-col gap-4">
//             <Image
//               src="/yo.jpg"
//               alt="me"
//               width={500}
//               height={500}
//               className="rounded-lg"
//               draggable={false}
//               decoding="async"
//             />
//           </div>
//           <div className="w-full flex flex-col gap-4">
//             <AnimatedWritterText text={textAbout} />
//             <div className="w-full flex items-center gap-4">
//               <Link
//                 href="https://instagram.com/adria.cabreraa"
//                 target="_blank"
//                 className=""
//               >
//                 <PullUpText
//                   text="Instagram"
//                   className="text-xl font-[500] hover:bg-white hover:text-black px-2 rounded-full transition-all duration-300"
//                 />
//               </Link>
//               <Link
//                 href="https://github.com/luqueee"
//                 target="_blank"
//                 className=""
//               >
//                 <PullUpText
//                   text="Github"
//                   className="text-xl font-[500] hover:bg-white hover:text-black px-2 rounded-full transition-all duration-300"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div>
        <p>Cuando me apetezca, hare algo aqui :D</p>
      </div>
    </div>
  );
}

/* 
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
      </div> */
