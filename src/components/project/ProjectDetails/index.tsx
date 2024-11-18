import LineItem from "./LineItem";

const details = [
  { label: "Total Area", value: "40*50 sqft", icon: "area" },
  { label: "Carpet Area", value: "40*50 sqft", icon: "carpetArea" },
  { label: "No. of floors", value: "1", icon: "floors" },
  { label: "Price - /sqft", value: "Rs. 3000 - 4000", icon: "price" },
  { label: "No. of bedrooms", value: "1", icon: "bedrooms" },
  { label: "No. of living room", value: "1", icon: "livingRooms" },
  { label: "No. of hall", value: "-", icon: "halls" },
  { label: "No. of Deck", value: "-", icon: "decks" },
  { label: "No. of Toilet", value: "-", icon: "toilets" },
  { label: "No. of kitchen", value: "-", icon: "kitchens" },
  { label: "Type of construction", value: "Residential", icon: "construction" },
];
export default function ProjectDetails() {
  return (
    <div className="flex flex-col mt-4">
      {details.map(
        (item, idx) =>
          item && (
            <LineItem
              classnames={`${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} border border-b-0 border-slate-300 ${idx == 0 && "rounded-t-md"} ${idx === details.length - 1 && "rounded-b-md border"}`}
              key={idx}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          ),
      )}
    </div>
  );
}
