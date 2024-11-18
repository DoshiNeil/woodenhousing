import { FirestoreDoc } from "@/firebase/types";

export interface ServicesPageType extends FirestoreDoc {
  models3d: string[];
  gallery3d: string[];
  title: string;
  hidden: boolean;
  sequence: number;
  gallery: string[];
  category: string;
  frontendIdentifier: string;
  description: string;
  video: string;
  projectDetails: {
    warrantyYears: number;
    livingRoom: number;
    noOfFloors: number;
    toilets: number;
    decks: number;
    totalArea: number;
    kitchens: number;
    typeOfConstruction: string;
    bedrooms: number;
    bhk: number;
    floors: {
      floorPlanName: string;
      kitchenWardrobe: boolean;
      fixedWardrobes: boolean;
      floorPlan: string;
      floorElevation: string;
      hall: boolean;
      washArea: boolean;
      toilet: boolean;
      store: boolean;
      lounge: boolean;
      deck: boolean;
      technicalRoom: boolean;
      studyTable: boolean;
      stair: boolean;
      washbasinCabinet: boolean;
      floorElevationName: string;
      kitchen: boolean;
      luggageRack: boolean;
      bathroomLaundryRoom: boolean;
      livingRoom: boolean;
      diningArea: boolean;
      area: number;
      miniBar: boolean;
      storageRoom: boolean;
      tvUnit: boolean;
      livingArea: boolean;
      openArea: boolean;
      doubleBedroom: boolean;
      description: string;
    }[];
    carpetArea: number;
    priceSqft: string;
    halls: number;
  };
  img: string;
}
