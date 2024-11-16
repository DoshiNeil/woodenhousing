import Link from "next/link";

export default function FeatureHighlights() {
  return (
    <div className="flex gap-8 border border-slate-200 border-l-0 border-r-0 py-2">
      <Link href="/" className="font-lexend text-black-200 font-normal">
        Why wooden house?
      </Link>
      <Link href="/" className="font-lexend text-black-200 font-normal">
        Benefits of wooden house
      </Link>
      <Link href="/" className="font-lexend text-black-200 font-normal">
        3D design tour
      </Link>
    </div>
  );
}
