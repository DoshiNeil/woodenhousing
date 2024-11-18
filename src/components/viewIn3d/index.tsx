import Model3d from "./Model3d";

export default function ViewIn3D({ model, model3d }: { model: string, model3d:Array<string> }) {
  return (
    <div className="bg-[#f6f3f6] flex flex-1 flex-col mt-32">
      <div className="flex flex-col flex-1 py-8 gap-2 mx-auto max-w-[1340px]">
        <h4 className="font-lexend text-3xl font-semibold">View in 3D</h4>
        <div className="w-full  min-w-[1200px] h-[606px] bg-white-100 rounded-lg flex justify-center items-center">
          <model-viewer
            alt="wooden house model"
            src={model}
            shadow-intensity="1"
            ar
            camera-controls
            style={{ width: "100%", height: "100%" }}
            touch-action="pan-y"
            auto-rotate
          ></model-viewer>
        </div>
      </div>
      <Model3d models={model3d}/>
    </div>
  );
}
