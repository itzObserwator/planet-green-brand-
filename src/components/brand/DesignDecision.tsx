import type { ReactNode } from "react";
import styles from "./DesignDecision.module.css";

export function DesignDecision({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <details className={styles.decision}>
      <summary>{question}</summary>
      <p>{children}</p>
    </details>
  );
}
