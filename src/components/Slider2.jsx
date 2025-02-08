import styles from "./Slider2.module.css";

export const Slider2 = () => {
  return (
    <div className={`${styles["slider"]}`}>
      <p className={`${styles["slider__p"]}`}>#SKIN CARE</p>
      <h2 className={`${styles["slider__h2"]}`}>Skin Lightening Collection</h2>
      <button className={`${styles["slider__btn"]}`}>Shop Now</button>
    </div>
  );
};
