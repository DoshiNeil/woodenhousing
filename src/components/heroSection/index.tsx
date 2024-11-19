type HeroSectionProp = { img: string };
export default function HeroSection({ img }: HeroSectionProp) {
  return (
    <div className="relative w-full xl:h-[640px]  h-[238px]">
      <img
        src={img}
        className={`absolute inset-0 object-cover  h-[238px] xl:h-[640px]  w-full object-center`}
      />
      <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
      <div className="flex flex-1 justify-center">
        <div className="relative flex flex-col flex-1 justify-center z-10  h-[238px] xl:h-[640px] max-w-[1340px]">
          <div className="ml-10 pl-8 border-l-8 border-white">
            <h2 className="text-white-100 text-[32px] xl:text-[42px] font-semibold font-lexend">
              Glass house - 70 log cabin
            </h2>
            <h3 className="text-[#ff6747]  text-xl xl:text-[32px] font-semibold font-lexend">
              Wooden cottage
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
