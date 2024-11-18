import ProjectDetails from "./ProjectDetails";
import ProjectImages from "./ProjectImages";

type ProjectProps = {
  images: Array<string>;
};
export default function Project({ images }: ProjectProps) {

  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1 py-8 gap-2 max-w-[1340px]">
        <div className="flex-[2_2_0%]">
          <h4 className="font-lexend font-medium text-2xl leading-7">
            Project Images
          </h4>
          <ProjectImages images={images} />
        </div>
        <div className="flex-[1_1_0%]">
          <h4 className="font-lexend font-medium text-2xl leading-7">
            Project Details
          </h4>
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
}
