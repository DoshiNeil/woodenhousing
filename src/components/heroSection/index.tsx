export default function HeroSection() {
  return (
    <div className="relative w-full h-[640px]">
      <div className="absolute inset-0 bg-[url('/heroImage.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
      <div className="flex flex-1 justify-center">
        <div className="relative flex flex-col flex-1 justify-center z-10 h-[640px] max-w-[1920px]">
          <div className="ml-10 pl-8 border-l-8 border-white">
            <h2 className="font-lexend text-4xl font-semibold leading-10 text-white-100">
              Glass house - 70 log cabin
            </h2>
            <h3 className="font-lexend text-orange-50 leading-8 text-2xl font-semibold">
              Wooden cottage
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
