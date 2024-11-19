import Model3d from "./Model3d";
import ModelViewer from "./ModelViewer";

export default function ViewIn3D({
  model,
  model3d,
}: {
  model: string;
  model3d: Array<string>;
}) {
  return (
    <div className="bg-[#f6f3f6] flex flex-1 flex-col mt-32">
      <div className="flex flex-col flex-1 py-8 gap-2 xl:mx-auto 2xl:max-w-[1440px] xl:max-w-[1200px] mx-8 ">
        <h4 className="font-lexend text-3xl font-semibold">View in 3D</h4>
        <div className="2xl:w-[1200px] xl:max-w-[900px] 2xl:h-[606px] md:w-full lg:max-w-[1200px] md:h-[400px] w-full h-[222px] bg-white-100 rounded-lg flex justify-center items-center">
          <ModelViewer
            alt="wooden house model"
            src={model}
            shadow-intensity="1"
            ar
            camera-controls
            style={{ width: "100%", height: "100%" }}
            touch-action="pan-y"
            auto-rotate
          />
        </div>
      </div>
      <Model3d models={model3d} />
    </div>
  );
}
