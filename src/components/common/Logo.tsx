import { cn } from "@/app/utils";
import Image from "next/image";
type LogoProps = {
  classnames?: string;
  small?: boolean;
};

export default function Logo({ classnames, small = false }: LogoProps) {
  return (
    <div className={cn(classnames, "flex items-center gap-2")}>
      <Image src="/logo.svg" alt="logo" width={41} height={41} />
        <h1 className="font-livvic text-purple-300 text-xl font-bold leading-7 tracking-wide text-left">
          WOODEN{small && <br/>}HOUSING
        </h1>
    </div>
  );
}
