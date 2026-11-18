import { BrandHero, Intro } from "@/components/brand/BrandHero";
import { BrandPurpose } from "@/components/brand/BrandPurpose";
import { ColorPalette } from "@/components/brand/ColorPalette";
import { TypographyShowcase } from "@/components/brand/TypographyShowcase";
import { LogoSystem } from "@/components/sections/LogoSystem";
import { VisualLanguage } from "@/components/sections/VisualLanguage";
import { SurfaceSystem } from "@/components/sections/SurfaceSystem";
import { GraphicElements } from "@/components/sections/GraphicElements";
import { Iconography } from "@/components/sections/Iconography";
import { ImageryStyle } from "@/components/sections/ImageryStyle";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { SectionNav } from "@/components/brand/SectionNav";
import { Reveal } from "@/components/brand/Reveal";
import { Footer } from "@/components/brand/Footer";
export default function Home() {
  return (
    <>
      <main id="main" className="main-shell">
        <Intro />
        <BrandHero />
        <div className="identity-layout">
          <SectionNav />
          <div className="identity-content">
            {[
              BrandPurpose,
              LogoSystem,
              ColorPalette,
              TypographyShowcase,
              VisualLanguage,
              SurfaceSystem,
              GraphicElements,
              Iconography,
              ImageryStyle,
              BrandApplications,
            ].map((Section, i) => (
              <Reveal key={i}>
                <Section />
              </Reveal>
            ))}
          </div>
        </div>
        <div className="asset-notice">
          <strong>A note on this identity study.</strong>
          <p>
            The original Planet Green logo and reference image were not
            included. Colours are provisional, Brutel uses an Inter fallback,
            and imagery and applications are concepts. Approved logo variants
            and logo-derived patterns will be enabled when the source artwork is
            supplied.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
