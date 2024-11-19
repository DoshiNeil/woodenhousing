import ProgressStepper from "./ProgressStepper";

export default function HowItWorks() {
  return (
    <div className="flex flex-col flex-1 gap-2 my-6">
      <div className="flex items-center gap-4 xl:mx-auto xl:mx-auto 2xl:min-w-[1440px] xl:min-w-[1200px] lg:mx-2 mx-8">
        <hr className="flex-1 bg-gradient-to-r h-[2px] from-transparent via-[#463B4C] to-transparent" />
        <h4 className="font-lexend text-3xl font-semibold">How it works ?</h4>
        <hr className="flex-1 bg-gradient-to-l from-transparent via-[#463B4C] to-transparent  h-[2px]" />
      </div>
      <div className="flex xl:mx-auto xl:mx-auto 2xl:min-w-[1440px] xl:min-w-[1200px] lg:mx-2 mx-8 xl:translate-x-12">
        <ProgressStepper />
      </div>
    </div>
  );
}
