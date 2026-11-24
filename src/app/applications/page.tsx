import type { Metadata } from "next";
import { WorldApplications } from "@/components/brand/WorldApplications";
export const metadata: Metadata = {
  title: "In the World — Planet Green",
  description:
    "Explore the Planet Green identity across digital, social, print, everyday objects and wayfinding.",
};
export default function ApplicationsPage() {
  return <WorldApplications />;
}
