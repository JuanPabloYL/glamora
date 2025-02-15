import { useEffect, useState } from "react";

import styles from "./Shop.module.css";
import { Sidebar } from "./Sidebar";
import { Products } from "./Products";

export const MainTemplate = ({ title, text, children }) => {
  const [filter, setFilters] = useState({});

  return (
    <main className={styles.shop}>
      <div className={styles["shop__bg"]}>
        <div className={`${styles["shop__title-container"]}`}>
          <h2>{title}</h2>
        </div>
      </div>
      <p className={`container ${styles["shop__description"]}`}>{text}</p>

      <div className={styles["products"]}>{children}</div>
    </main>
  );
};
