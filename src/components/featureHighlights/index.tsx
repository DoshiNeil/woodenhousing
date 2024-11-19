const features = [
  {
    image: "/features/earthquakeResistant.svg",
    label: "Earthquake Resistance",
  },
  {
    image: "/features/heatAndColdResistant.svg",
    label: "Heat & Cold Resistance",
  },
  {
    image: "/features/fireResistant.svg",
    label: "Fire Resistance",
  },
  {
    image: "/features/soundResistant.svg",
    label: "Sound Resistance",
  },
  {
    image: "/features/3yearsWarranty.svg",
    label: "3 Years Warranty",
  },
];

export default function FeatureHighlights() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1 justify-between py-8 2xl:max-w-[1440px] xl:max-w-[1200px] mx-2 lg:mx-8">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <img
              src={f.image}
              alt={f.label}
              className="h-[47px] w-[47px] xl:h[81px] xl:w-[81px]"
            />
            <h4 className="text-center text-[#232323] text-[9.50px] md:text-lg xl:text-xl font-normal font-lexend w-20 lg:w-32">
              {f.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
