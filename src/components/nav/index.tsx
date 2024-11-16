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
    <nav className="flex flex-1 justify-between pb-4">
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
      <Button className="text-lg font-bold p-6 rounded-md"> Contact Us </Button>
    </nav>
  );
}
