import type { FullVisualSlide } from "@/src/content/bullpen-runtime-deck";
import styles from "./math-layout.module.css";

export function MathLayout({
  data,
}: {
  data: FullVisualSlide;
}) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.subtitle}>Unused in this deck.</p>
    </div>
  );
}
