import { Suspense } from "react";
import type { Metadata } from "next";
import { IdentityExplorer } from "@/components/brand/IdentityExplorer";
export const metadata: Metadata = {
  title: "Identity Toolkit — Planet Green",
  description:
    "Inspect reusable components, logo colour tokens, typography, graphics and responsive application concepts.",
};
export default function ExplorerPage() {
  return (
    <Suspense
      fallback={
        <main id="main" className="explorer-shell collection-shell">
          <h1>Opening the identity toolkit…</h1>
        </main>
      }
    >
      <IdentityExplorer />
    </Suspense>
  );
}
