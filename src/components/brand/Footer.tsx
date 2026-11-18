import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-message">
        <span className="eyebrow">A system made to grow.</span>
        <h2>
          Let’s take the
          <br />
          <em>natural way forward.</em>
        </h2>
        <Link className="button light" href="/explorer/">
          Open the component library <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="footer-base">
        <BrandLogo compact />
        <span>
          Identity study / 2026
          <br />
          Original assets & brand approval pending.
        </span>
        <a href="#top">
          Back to the top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
