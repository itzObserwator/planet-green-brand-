"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CollectionHero, CollectionFooter } from "./CollectionChrome";
import { GivingBackApplications } from "@/components/giving-back/GivingBackApplications";
import {
  BrandApplications,
  type ApplicationTab,
} from "@/components/sections/BrandApplications";
const formats = [
  {
    tab: "Digital",
    name: "On screen",
    description: "An invitation to a closer life",
    image: "floating-earth",
  },
  {
    tab: "Social",
    name: "In the feed",
    description: "Farm Natura stories",
    image: "farming",
  },
  {
    tab: "Print",
    name: "On the page",
    description: "The Eco World story",
    image: "landscape",
  },
  {
    tab: "Objects",
    name: "Everyday objects",
    description: "Visits & community events",
    image: "texture",
  },
  {
    tab: "Wayfinding",
    name: "Out on the land",
    description: "Farm & community signs",
    image: "forest",
  },
] as const;
export function WorldApplications() {
  const [selected, setSelected] = useState<ApplicationTab>("Digital");
  return (
    <main id="main" className="collection-shell world-shell">
      <CollectionHero kind="world" />
      <div className="world-collection-heading">
        <div>
          <span className="collection-kicker">One system. Five settings.</span>
          <h2>Find it in the everyday.</h2>
        </div>
        <a href="#application-workbench">
          Explore the previews
          <ArrowDown size={16} />
        </a>
      </div>
      <div className="world-format-grid">
        {formats.map((format, i) => (
          <button
            key={format.tab}
            onClick={() => {
              setSelected(format.tab);
              document
                .getElementById("application-workbench")
                ?.scrollIntoView({ block: "start" });
            }}
            aria-pressed={selected === format.tab}
            aria-label={`${format.tab} applications`}
            className="world-format-card"
          >
            <div>
              <Image
                src={`/imagery/${format.image}.webp`}
                alt=""
                fill
                sizes="(max-width:700px) 50vw, 20vw"
              />
              <span>0{i + 1}</span>
              <ArrowUpRight size={18} />
            </div>
            <span>
              <strong>{format.name}</strong>
              <small>{format.description}</small>
            </span>
          </button>
        ))}
      </div>
      <div id="application-workbench" className="world-workbench">
        <BrandApplications
          activeTab={selected}
          onTabChange={setSelected}
          title="The application studio"
        />
      </div>
      <div className="world-guidance">
        <div>
          <span className="collection-kicker">Keep the identity connected</span>
          <h2>
            The same character.
            <br />
            In every setting.
          </h2>
        </div>
        <div>
          <p>
            Begin with something people can experience. Farm Natura brings
            cultivation into view; The Eco World connects daily life with its
            landscape; Veda Bharath brings the relationship to the table; GLC
            offers a route to farmland. Keep each role clear. Let every
            application invite attention, participation and care.
          </p>
          <Link href="/explorer/?tab=guidelines">
            Open the brand guidelines
            <ArrowUpRight size={16} />
          </Link>
          <span>
            Application concepts for review. Production artwork requires final
            approval.
          </span>
        </div>
      </div>
      <GivingBackApplications />
      <CollectionFooter />
    </main>
  );
}
