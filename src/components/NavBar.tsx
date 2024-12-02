import type * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-transparent hover:bg-white hover:text-black px-2 py-1 text-white rounded-md transition-all duration-200"
    >
      {children}
    </Link>
  );
}

export default async function NavBar() {
  return (
    <header className="fixed top-0 left-0 py-2 w-full min-h-12 bg-zinc-900 bg-opacity-40 backdrop-blur-sm flex items-center px-2 justify-between">
      <Link
        href="/"
        className={`md:lg:text-6xl text-2xl w-60 ${outfit.className} font-[400]`}
      >
        Luqueee
      </Link>
      <div className="w-60 flex justify-center gap-4 items-center">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/about">Sobre mi</NavLink>
      </div>
      <div className="min-w-60 px-2 h-full flex items-center justify-end gap-4">
        <Link
          href="/contact"
          className="px-2 border py-1 border-white rounded-full"
        >
          Disponible como freelance
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
