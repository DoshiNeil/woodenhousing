"use client";
export function Video({ video }: { video: string }) {
  return (
    <video
      width="1200"
      height="600"
      preload="metadata"
      onError={(error) => console.log(error)}
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
