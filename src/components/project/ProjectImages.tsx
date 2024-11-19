type ProjectImagesProps = { images: Array<string> };
export default function ProjectImages({ images }: ProjectImagesProps) {
  return (
    <div className="relative h-[496px] max-w-[762px] mt-4">
      <img
        src={images[0]}
        alt="Hero Image"
        className="absolute inset-0 object-cover h-[496px] w-[762px] rounded-lg z-0"
      />
      <div className="flex flex-1 gap-4 h-full w-full justify-center items-end z-10 translate-y-14">
        {images.slice(0, 3).map((img, idx) => (
          <img
            src={img}
            className="rounded-md  h-[127px] w-[163px] border-white-100 border-2 rounded-md"
            key={idx}
          />
        ))}
        <div className="relative h-[127px] w-[163px] -translate-y-0 ">
          <img
            src={images[3]}
            className=" absolute inset-0 rounded-md  h-[127px] w-[163px] border-white-100 border-2 rounded-md"
          />
          <div className="absolute inset-0 bg-black-100/50 border-white-100 border-2 rounded-md" />
          <div className="absolute inset-0 flex flex-1 justify-center items-center">
            <p className="font-lexend text-[20.04px] text-center text-white-100 w-16 font-medium leading-[21.83px]">
              View more(7)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
