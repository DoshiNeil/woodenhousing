import ProgressStepper from "./ProgressStepper";

export default function HowItWorks() {
  return (
    <div className="flex flex-col flex-1 gap-2 my-6">
      <div className="flex justify-center items-center gap-4 min-w-[1340px] mx-auto">
        <hr className="flex-1 bg-gradient-to-r h-[2px] from-transparent via-[#463B4C] to-transparent" />
        <h4 className="font-lexend text-3xl font-semibold">How it works ? </h4>
        <hr className="flex-1 bg-gradient-to-l from-transparent via-[#463B4C] to-transparent  h-[2px]" />
      </div>
      <div className="flex mx-auto min-w-[1440px]">
        <ProgressStepper />
      </div>
    </div>
  );
}
