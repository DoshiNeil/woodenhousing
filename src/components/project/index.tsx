import ProjectDetails from "./ProjectDetails";
import ProjectImages from "./ProjectImages";

type ProjectProps = {
  images: Array<string>;
};
export default function Project({ images }: ProjectProps) {
  return (
    <div className="flex flex-1 justify-center mx-8">
      <div className="flex flex-col xl:flex-row flex-1 py-8 gap-8  2xl:max-w-[1440px] xl:max-w-[1200px] mx-2 lg:mx-8 xl:gap-x-[48px]">
        <div className="xl:flex-[2_2_0%] xl:max-w-[47.625rem]">
          <h4 className="font-lexend font-medium text-2xl leading-7">
            Project Images
          </h4>
          <div className="flex flex-1 justify-center">
            <ProjectImages images={images} />
          </div>
        </div>
        <div className="xl:flex-[1_1_0%] lg:mt-20 md:mt-24 xl:mt-0">
          <h4 className="font-lexend font-medium text-2xl leading-7">
            Project Details
          </h4>
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
}
