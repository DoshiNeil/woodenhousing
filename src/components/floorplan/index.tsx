import FeatureList from "./FeatureList";
import Heading from "./Heading";

type FloorPlanType = { floorElevation: string; floorPlan: string };

export default function FloorPlan({
  floorElevation,
  floorPlan,
}: FloorPlanType) {
  return (
    <div className="flex flex-1 flex-col mt-6">
      <div className="flex flex-1 flex-col py-8 gap-6 xl:mx-auto 2xl:w-[1440px] xl:w-[1200px] lg:mx-2 mx-8">
        <Heading />
        <div className="flex flex-1 xl:gap-x-[3.75rem] flex-col xl:flex-row mt-4 xl:mt-0">
          <div className="xl:flex-[2_2_0%] flex-1 justify-center xl:max-w-[44.375rem]">
            <img src={floorPlan} className="xl:max-w-[710px] w-full" />
          </div>
          <div className="xl:flex-[1_1_0%] flex-1">
            <FeatureList floor="1st" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:mt-24 mt-4 relative">
        <img src="/chexbg.svg" className="absolute z-0" />
        <img
          src={floorElevation}
          className="relative object-cover xl:h-[25rem] h-[15rem] z-10"
        />
      </div>
      <div className="flex flex-1 flex-col py-8 gap-6 xl:mx-auto 2xl:w-[1440px] xl:w-[1200px] lg:mx-2 mx-8">
        <div className="flex flex-1 xl:gap-x-[3.75rem] flex-col xl:flex-row mt-4 xl:mt-24">
          <div className="xl:flex-[1_1_0%] flex-1">
            <FeatureList floor="2nd" />
          </div>
          <div className="xl:flex-[2_2_0%] flex-1 justify-center xl:max-w-[44.375rem]">
            <img src={floorPlan} className="xl:max-w-[710px] w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:mt-24 mt-4 relative">
        <img src="/chexbg.svg" className="absolute z-0" />
        <img
          src={floorElevation}
          className="relative object-cover xl:h-[25rem] h-[15rem] z-10"
        />
      </div>
    </div>
  );
}
