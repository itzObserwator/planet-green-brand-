import { ReactNode } from "react";
export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-label">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-description">{children}</div>}
    </div>
  );
}
