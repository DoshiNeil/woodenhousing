import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <nav className="flex flex-1 justify-between">
      <Logo/>
      <p className="font-lexend"> navbar </p>
    </nav>
  );
}
