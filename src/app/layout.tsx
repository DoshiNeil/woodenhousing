import type { Metadata } from "next";
import "./globals.css";
import { lexendDeca, livvic } from "./fonts";

export const metadata: Metadata = {
  title: "Wooden Housing",
  description: "Pre fabricated high performance wooden cottages and housing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} ${livvic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
