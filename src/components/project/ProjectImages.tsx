export default function ProjectImages() {
  return (
    <div className="relative h-[500px] max-w-[780px] mt-4">
      <img
        src="/heroImage.png"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black-100 opacity-50 z-10" />
    </div>
  );
}
