export default function Heading() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="flex grow justify-center items-center gap-4">
        <hr className="flex-1 bg-gradient-to-r h-[2px] from-transparent via-[#463B4C] to-transparent" />
        <h4 className="font-lexend text-3xl font-semibold">Floor Plan</h4>
        <hr className="flex-1 bg-gradient-to-l from-transparent via-[#463B4C] to-transparent  h-[2px]" />
      </div>
      <div className="flex flex-1 justify-center">
        <p className="font-lexend font-light w-80 text-center"> Take a look at floor plan of Wooden Cottage Model </p>
      </div>
    </div>
  );
}
