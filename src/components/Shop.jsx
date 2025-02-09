import { useEffect, useState } from "react";

import styles from "./Shop.module.css";
import { Sidebar } from "./Sidebar";
import { Products } from "./Products";

export const Shop = () => {
  const [filter, setFilters] = useState({});

  return (
    <main className={styles.shop}>
      <div className={styles["shop__bg"]}>
        <div className={`${styles["shop__title-container"]}`}>
          <h2>Skincare</h2>
        </div>
      </div>
      <p className={`container ${styles["shop__description"]}`}>
        Proper cleansing is the first step to healthy, radiant skin. Our
        carefully formulated cleansers and toners gently remove impurities while
        maintaining your skin’s natural pH and hydration, ensuring it’s
        perfectly prepped to absorb nourishing ingredients.
      </p>

      <div className={styles["products"]}>
        <Sidebar />
        <Products />
      </div>
    </main>
  );
};
