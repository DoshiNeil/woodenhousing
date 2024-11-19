"use client";
type ProjectImagesProps = { images: Array<string> };
export default function ProjectImages({ images }: ProjectImagesProps) {
  const isBelowMd = useIsBelowMd();
  return (
    <div className="relative w-[378px] h-[246.32px] lg:h-[496px] lg:w-[900px] md:w-[750px] mt-4">
      <img
        src={images[0]}
        alt="Hero Image"
        className="absolute inset-0 object-cover w-[378px] h-[246.32px] lg:h-[496px] lg:w-[900px] md:w-[750px] md:h-[340px] rounded-lg z-0"
      />
      <div className="flex flex-1 gap-4 h-full w-full justify-center items-end z-10  translate-y-8  md:translate-y-32 lg:translate-y-14">
        {images.slice(0, isBelowMd ? 2 : 3).map((img, idx) => (
          <img
            src={img}
            className="rounded-md  w-[102.68px] h-20 lg:h-[127px] lg:w-[163px] border-white-100 border-2 rounded-md"
            key={idx}
          />
        ))}
        <div className="relative w-[102.68px] h-20 lg:h-[127px] lg:w-[163px] -translate-y-0 ">
          <img
            src={images[3]}
            className=" absolute inset-0 rounded-md  w-[102.68px] h-20 lg:h-[127px] lg:w-[163px] border-white-100 border-2 rounded-md"
          />
          <div className="absolute inset-0 bg-black-100/50 border-white-100 border-2 rounded-md" />
          <div className="absolute inset-0 flex flex-1 justify-center items-center">
            <p className="font-lexend text-xs lg:text-[20.04px] text-center text-white-100 w-16 font-medium leading-[13.67px] lg:leading-[21.83px]">
              View more(7)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

const useIsBelowMd = () => {
  const [isBelowMd, setIsBelowMd] = useState(false);

  useEffect(() => {
    setIsBelowMd(window.innerWidth < 768);
    const handleResize = () => setIsBelowMd(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isBelowMd;
};
