"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../common/carousel";

type ProjectImagesProps = { images: Array<string> };
export default function ProjectImages({ images }: ProjectImagesProps) {
  const [selected, setSelected] = useState<string>(images[0]);
  const handleClick = (img: string) => setSelected(img);
  return (
    <div className="relative h-[500px] max-w-[780px] mt-4">
      <img
        src={selected}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
      />
      <div className="flex flex-1 h-full w-full justify-center items-end z-10 translate-y-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-5/6"
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex items-center justify-center p-0">
                  <img
                    src={img}
                    className="rounded-md border-2 border-white-100"
                    onClick={() => handleClick(img)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
