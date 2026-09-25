import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NCC IIT Roorkee — Unity & Discipline",
  description: "National Cadet Corps at IIT Roorkee.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}