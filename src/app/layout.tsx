import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { GlassNavbar } from "@/components/glass/GlassNavbar";
export const metadata: Metadata = {
  title: "Planet Green — A Living Identity",
  description:
    "Move to Nature. An interactive identity study and reusable design system for Planet Green. Original brand assets pending.",
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
