import { Link } from "react-router-dom";
import styles from "./Media.module.css";

export const Media = () => {
  return (
    <div className={`${styles["media"]}`}>
      <div className={`${styles["media__container"]}`}>
        <div className="container">
          <span className={`${styles["media__span"]}`}>Treatment</span>
          <h2>Face you skin with us</h2>
          <p>Skincare made with the world's finest products.</p>

          <Link to="/shop" className={`${styles["media__link"]}`}>
            Explore Now
          </Link>
        </div>
      </div>
      <div className={`${styles["media__image"]}`}>
        <img src="../../public/img/image1.jpg" alt="Makeup" />
      </div>
    </div>
  );
};
