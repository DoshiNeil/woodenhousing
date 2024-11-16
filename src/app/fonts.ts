import { Lexend_Deca, Livvic } from "next/font/google";

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-deca",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const livvic = Livvic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-livvic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});
