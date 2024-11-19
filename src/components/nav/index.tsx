"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import { cn } from "@/app/utils";
import { useState } from "react";
import Sidebar from "./Sidebar";

const navItems = [
  { name: "Home", href: "/", isCurrent: true },
  { name: "Designs", href: "/designs", isCurrent: false },
  { name: "Services", href: "/services", isCurrent: false },
  { name: "About Us", href: "/about", isCurrent: false },
  { name: "Blog", href: "/blog", isCurrent: false },
  { name: "Careers", href: "/careers", isCurrent: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-1 justify-center">
        <nav className="flex flex-1 justify-between py-4 2xl:max-w-[1440px] xl:max-w-[1200px] mx-2">
          <Logo />
          <div
            className="
            xl:flex hidden flex-1 justify-between items-center max-w-[36.5rem]"
          >
            {navItems.map((nav, idx) => (
              <div
                key={idx}
                className={`pb-0.5 ${nav.isCurrent && "border-b-2 border-solid border-[#d75438]"}`}
              >
                <Link
                  href={nav.href}
                  className={cn(
                    "text-[#1E1E21] font-lexend tracking-normal font-normal text-lg leading-normal",
                    `${nav.isCurrent && "font-medium"}`,
                  )}
                >
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
          <button
            className="
            xl:block hidden
            inline-flex p-2.5 px-[1.4375rem] justify-center items-center 
            gap-2.5 rounded-md bg-[#D75438] hover:bg-[#B9452C] text-white-100 
            font-lexend text-lg tracking-normal font-medium leading-normal"
          >
            Contact Us
          </button>
          <button className="xl:hidden" onClick={() => setIsOpen(true)}>
            <img src="/mobileMenu.svg" />
          </button>
        </nav>
      </div>
      <div className="hidden xl:flex flex-1 justify-center border border-slate-200 border-l-0 border-r-0 py-2">
        <div className="flex flex-1 gap-8 2xl:max-w-[1440px] xl:max-w-[1200px]">
          <Link href="/" className="font-lexend text-black-200 font-normal">
            Why wooden house?
          </Link>
          <Link href="/" className="font-lexend text-black-200 font-normal">
            Benefits of wooden house
          </Link>
          <Link href="/" className="font-lexend text-black-200 font-normal">
            3D design tour
          </Link>
        </div>
      </div>

      {/** Sidebar show code **/}
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 
        bg-white shadow-lg 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        z-50
      `}>
        <Sidebar/>
      </div>
    </>
  );
}
