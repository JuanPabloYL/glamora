import styles from "./SliderControls.module.css";

export const SliderControls = ({ setIndex, index }) => {
  return (
    <div className={styles["slider-control"]}>
      {[0, 1, 2].map((i) => (
        <button
          to="/shop"
          key={i}
          className={`${styles["slider-control__btn"]} ${
            index === i ? styles["active"] : ""
          }`}
          onClick={() => setIndex(i)}
        ></button>
      ))}
    </div>
  );
};
