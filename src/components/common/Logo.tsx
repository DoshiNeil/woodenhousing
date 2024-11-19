import { cn } from "@/app/utils";
type LogoProps = {
  classnames?: string;
  small?: boolean;
};

export default function Logo({ classnames }: LogoProps) {
  return (
    <div className={cn(classnames, "flex items-center gap-2")}>
      <img src="/logo.svg" alt="logo" className="w-[2.07694rem] h-[1.97425rem] flex-shrink-0 xl:w-[41.03px] xl:h-[39px]" />
        <h1 className=" xl:block hidden text-[#2D1F34] font-livvic text-[1.36763rem] tracking-[0.05469rem] font-bold leading-normal">
          WOODENHOUSING
        </h1>
        <h1 className=" xl:hidden block text-[#3A2D41] font-livvic text-[1.00388rem] tracking-[0.04013rem] font-black leading-[105%]">
          WOODEN<br/>HOUSING
        </h1>
    </div>
  );
}
