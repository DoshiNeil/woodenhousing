import { cn } from "@/lib/utils";

export type LineItemType = {
  icon: string;
  label: string;
  value: string | number;
  classnames: string;
};
export default function LineItem({
  icon,
  label,
  value,
  classnames,
}: LineItemType) {
  return (
    <div className={cn(classnames, "flex items-center py-1.5 px-4 gap-2")}>
      <img src={`/projectDetails/${icon}.svg`} />
      <div className="flex flex-1 justify-between">
        <p className="font-lexend leading-8">{label}</p>
        <p className="font-lexend leading-8 font-medium">{value}</p>
      </div>
    </div>
  );
}
