import { ArrowUpRight } from "lucide-react";
import { brandContext } from "@/lib/brand-context";
export function BrandPortfolio({ theme }: { theme: "contemporary" | "folk" }) {
  return (
    <div id="portfolio" className={`brand-portfolio portfolio-${theme}`}>
      <div className="portfolio-intro">
        <div>
          <span>Planet Green Infra / The portfolio</span>
          <h2>
            Land, living
            <br />
            and community.
          </h2>
        </div>
        <div>
          <p>{brandContext.portfolioIntro}</p>
          <p>
            {brandContext.farming} {brandContext.collaboration}
          </p>
        </div>
      </div>
      <div className="portfolio-grid">
        {brandContext.portfolio.map((project, i) => (
          <a key={project.name} href={project.href} className="portfolio-item">
            <span>
              0{i + 1}
              <ArrowUpRight size={15} />
            </span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
      <a
        className="portfolio-source"
        href="https://planetgreen.co.in/communities.html"
      >
        View the portfolio on Planet Green’s website
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
