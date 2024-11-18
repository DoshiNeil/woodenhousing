import { Card, CardContent } from "../common/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../common/carousel";

export default function ProjectImages() {
  return (
    <div className="relative h-[500px] max-w-[780px] mt-4">
      <img
        src="/heroImage.png"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black-100 opacity-50 z-5" />
      <div className="flex flex-1 h-full w-full justify-center items-end z-10 translate-y-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
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
