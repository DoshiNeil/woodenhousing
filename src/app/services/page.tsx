import FeatureHighlights from "@/components/featureHighlights";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/nav";
import Project from "@/components/project";
import { FirestoreService } from "@/firebase/firestoreService";
import { serializeDocument } from "@/lib/utils";
import { ServicesPageType } from "./type";
import FloorPlan from "@/components/floorplan";

export default async function Services() {
  const { data, error } = await getServerPageData();
  if (data === null) return <h4>{error}</h4>;

  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
      <Project
        images={data.gallery}
      />
      <FloorPlan/>
    </div>
  );
}

async function getServerPageData() {
  const collectionName = "services";
  const id = "B5PFJmIHiGeH7lWo8PaK";

  try {
    const doc = await FirestoreService.getDocument<ServicesPageType>(
      collectionName,
      id,
    );

    // If document doesn't exist, return null without error
    if (!doc) {
      return { data: null };
    }

    // Convert Firestore Timestamps to ISO strings for serialization
    const serializedDoc = serializeDocument(doc);

    return { data: serializedDoc };
  } catch (error) {
    console.error(
      `Error fetching document ${id} from ${collectionName}:`,
      error,
    );
    return {
      data: null,
      error: "Failed to fetch document",
    };
  }
}
