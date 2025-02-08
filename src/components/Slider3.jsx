import styles from "./Slider3.module.css";

export const Slider3 = () => {
  return (
    <div className={`${styles["slider"]}`}>
      <p className={`${styles["slider__p"]}`}>#50% OFF</p>
      <h2 className={`${styles["slider__h2"]}`}>Beauty Deal Collection</h2>
      <button className={`${styles["slider__btn"]}`}>Shop Collection</button>
    </div>
  );
};
