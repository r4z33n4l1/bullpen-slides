import type { FullVisualSlide } from "@/src/content/bullpen-runtime-deck";
import styles from "./theorem-layout.module.css";

export function TheoremLayout({
  data,
}: {
  data: FullVisualSlide;
}) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.box}>
        <p className={styles.statement}>Unused in this deck.</p>
      </div>
    </div>
  );
}
