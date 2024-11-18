export default function ViewIn3D({ model }: { model: string }) {
  return (
    <div className="bg-[#f6f3f6] flex flex-1 mt-32 justify-center">
      <div className="flex flex-col flex-1 py-8 gap-2 max-w-[1340px]">
        <h4 className="font-lexend text-3xl font-semibold">View in 3D</h4>
        <div className="w-full h-[606px] bg-white-100 rounded-lg flex justify-center items-center mb-24">
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
    </div>
  );
}
