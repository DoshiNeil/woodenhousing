import FeatureList from "./FeatureList";
import Heading from "./Heading";

export default function FloorPlan() {
  return (
    <div className="flex flex-col gap-4">
      <Heading />
      <div className="flex gap-4">
        <img src="https://res.cloudinary.com/djsafovd9/image/upload/v1731644684/Ele_copy_h0jphe_c8zm4i.webp" />
        <FeatureList/>
      </div>
        <img src="https://res.cloudinary.com/djsafovd9/image/upload/v1731644684/Ele_copy_h0jphe_c8zm4i.webp" />
      <div className="flex gap-4">
        <FeatureList/>
        <img src="https://res.cloudinary.com/djsafovd9/image/upload/v1731644684/Ele_copy_h0jphe_c8zm4i.webp" />
      </div>
        <img src="https://res.cloudinary.com/djsafovd9/image/upload/v1731644684/Ele_copy_h0jphe_c8zm4i.webp" />
    </div>
  );
}
