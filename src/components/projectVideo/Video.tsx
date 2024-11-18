"use client";
export function Video({ video }: { video: string }) {
  return (
    <video
      width="1200"
      height="600"
      controls
      preload="metadata"
      onError={(error) => console.log(error)}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
