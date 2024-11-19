import { Video } from "./Video";

export default function ProjectVideo({ video }: { video: string }) {
  return (
    <div className="flex flex-1 my-12 xl:mx-auto">
      <Video video={video} />
    </div>
  );
}
