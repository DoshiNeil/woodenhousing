import { Button } from "../common/button";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <nav className="flex flex-1 justify-between">
      <Logo />
      <Button> Contact Us </Button>
    </nav>
  );
}
