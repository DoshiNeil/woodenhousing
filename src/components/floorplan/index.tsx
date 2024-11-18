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
          <div className="flex flex-1">
            <div className="flex-[2_2_0%] justify-center">
              <img src={floorPlan} className="max-w-[710px]" />
            </div>
            <div className="flex-[1_1_0%]">
              <FeatureList floor="1st" />
            </div>
          </div>
        </div>
      <div className="flex flex-1 justify-center items-center mt-24 relative">
        <img src="/chexbg.svg" className="absolute shadow-md z-0" />
        <img
          src={floorElevation}
          className="relative object-cover max-h-[383px] z-10"
        />
      </div>
    </div>
  );
}
