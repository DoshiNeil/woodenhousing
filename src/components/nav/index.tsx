import { Button } from "../common/button";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <nav className="flex flex-1 justify-between">
      <Logo />
      <Button className="text-lg font-bold p-6 rounded-md"> Contact Us </Button>
    </nav>
  );
}
