import Image from "next/image";

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
      <div className="flex flex-1 justify-around py-8 max-w-[1820px]">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <Image src={f.image} alt={f.label} width={81} height={81} />
            <h4 className="font-lexend font-normal leading-7 text-center">{f.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
