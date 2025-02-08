import { Link } from "react-router-dom";
import styles from "./Slider1.module.css";

export const Slider1 = () => {
  return (
    <div className={`${styles["slider"]}`}>
      <p className={`${styles["slider__p"]}`}>#ADVANCED YOUTH</p>
      <h2 className={`${styles["slider__h2"]}`}>Beauty You Collection</h2>
      <Link to="/shop" className={`${styles["slider__btn"]}`}>
        View Collection
      </Link>
    </div>
  );
};
