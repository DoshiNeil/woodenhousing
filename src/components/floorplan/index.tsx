import FeatureList from "./FeatureList";
import Heading from "./Heading";

type FloorPlanType = { floorElevation: string; floorPlan: string };

export default function FloorPlan({
  floorElevation,
  floorPlan,
}: FloorPlanType) {
  return (
    <div className="flex flex-1 flex-col mt-6">
      <div className="flex flex-1 flex-col py-8 gap-6 mx-auto lg:w-[1340px]">
        <Heading />
        <div className="flex flex-1 gap-x-[3.75rem]">
          <div className="flex-[2_2_0%] justify-center max-w-[44.375rem]">
            <img src={floorPlan} className="max-w-[710px]" />
          </div>
          <div className="flex-[1_1_0%]">
            <FeatureList floor="1st" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center mt-24 relative">
        <img src="/chexbg.svg" className="absolute z-0" />
        <img
          src={floorElevation}
          className="relative object-cover h-[25rem] z-10"
        />
      </div>
      <div className="flex flex-1 flex-col py-8 gap-6 mt-24 mx-auto lg:w-[1340px]">
        <div className="flex flex-1 gap-x-[3.75rem]">
          <div className="flex-[1_1_0%]">
            <FeatureList floor="2nd" />
          </div>
          <div className="flex-[2_2_0%] justify-center max-w-[44.375rem]">
            <img src={floorPlan} className="max-w-[710px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center mt-24 relative">
        <img src="/chexbg.svg" className="absolute z-0" />
        <img
          src={floorElevation}
          className="relative object-cover h-[25rem] z-10"
        />
      </div>
    </div>
  );
}
