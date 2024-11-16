import Link from "next/link";
import { Button } from "../common/button";
import Logo from "../common/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../common/navigation-menu";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-1 justify-center">
        <nav className="flex flex-1 justify-between py-4 max-w-[1920px]">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="font-lexend text-lg font-normal hover:font-bold leading-snug">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-lexend text-lg font-normal leading-snug">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Design
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-lexend text-lg font-normal leading-snug">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-lexend text-lg font-normal leading-snug">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-lexend text-lg font-normal leading-snug">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-lexend text-lg font-normal leading-snug">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Career
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="text-lg font-bold p-6 rounded-md">
            Contact Us
          </Button>
        </nav>
      </div>
      <div className="flex flex-1 justify-center border border-slate-200 border-l-0 border-r-0 py-2">
        <div className="flex flex-1 gap-8 max-w-[1920px]">
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
