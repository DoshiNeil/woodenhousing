import Link from "next/link";
import { Button } from "../common/button";
import Logo from "../common/Logo";
import { cn } from "@/app/utils";

const navItems = [
  { name: "Home", href: "/", isCurrent: true },
  { name: "Designs", href: "/designs", isCurrent: false },
  { name: "Services", href: "/services", isCurrent: false },
  { name: "About Us", href: "/about", isCurrent: false },
  { name: "Blog", href: "/blog", isCurrent: false },
  { name: "Careers", href: "/careers", isCurrent: false },
];

export default function Navbar() {
  return (
    <>
      <div className="flex flex-1 justify-center">
        <nav className="flex flex-1 justify-between py-4 max-w-[1440px]">
          <Logo />
          <div className="flex flex-1 justify-between items-center max-w-[36.5rem]">
            {navItems.map((nav, idx) => (
              <div
                className={`pb-0.5 ${nav.isCurrent && "border-b-2 border-solid border-[#d75438]"}`}
              >
                <Link
                  href={nav.href}
                  key={idx}
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
          <Button className="text-lg font-bold p-6 rounded-md">
            Contact Us
          </Button>
        </nav>
      </div>
      <div className="flex flex-1 justify-center border border-slate-200 border-l-0 border-r-0 py-2">
        <div className="flex flex-1 gap-8 max-w-[1440px]">
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
    </>
  );
}
