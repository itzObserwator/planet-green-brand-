import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "./globals.css";
import { GlassNavbar } from "@/components/glass/GlassNavbar";
export const metadata: Metadata = {
  title: "Planet Green — A Living Identity",
  description:
    "A closer life begins with attention. Explore food, farming, living and land through Ecoworld, Farm Natura, Green Land Capital and Veda Bharat.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <GlassNavbar />
        {children}
      </body>
    </html>
  );
}
