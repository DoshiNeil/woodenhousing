import ProjectDetails from "./ProjectDetails";
import ProjectImages from "./ProjectImages";

export default function Project() {
  return (
    <div className="flex gap-4">
      <ProjectImages />
      <ProjectDetails />
    </div>
  );
}
