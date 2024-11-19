import FeatureHighlights from "@/components/featureHighlights";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/nav";
import Project from "@/components/project";
import { FirestoreService } from "@/firebase/firestoreService";
import { serializeDocument } from "@/lib/utils";
import { ServicesPageType } from "@/app/services/type";
import FloorPlan from "@/components/floorplan";
import ViewIn3D from "@/components/viewIn3d";
import Script from "next/script";
import ProjectVideo from "@/components/projectVideo";
import HowItWorks from "@/components/howItWorks";
import Head from "next/head";

export default async function Services() {
  const { data, error } = await getServerPageData();
  if (data === null) return <h4>{error}</h4>;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
      ></Script>
      <div className="flex flex-col">
        <Navbar />
        <HeroSection />
        <FeatureHighlights />
        <Project images={data.gallery} />
        <FloorPlan
          floorElevation={data.projectDetails.floors[0].floorElevation}
          floorPlan={data.projectDetails.floors[0].floorPlan}
        />
        <ViewIn3D model={data.models3d[0]} model3d={data.gallery3d} />
        <ProjectVideo video={data.video} />
        <HowItWorks />
      </div>
    </>
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
