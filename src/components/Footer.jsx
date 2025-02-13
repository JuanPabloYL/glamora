import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["footer__container"]} container`}>
        <div className={styles["footer__col"]}>
          <h4 className={styles["footer__title"]}>Explore</h4>
          <ul className={styles["footer__list"]}>
            <Link className={styles["footer__link"]} to="/about-us">
              About Us
            </Link>
            <Link className={styles["footer__link"]} to="/terms-of-service">
              Terms Of Service
            </Link>
            <Link className={styles["footer__link"]} to="/privacy-policy">
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className={styles["footer__col"]}>
          <h4 className={styles["footer__title"]}>Explore</h4>
          <ul className={styles["footer__list"]}>
            <Link className={styles["footer__link"]} to="/about-us">
              About Us
            </Link>
            <Link className={styles["footer__link"]} to="/terms-of-service">
              Terms Of Service
            </Link>
            <Link className={styles["footer__link"]} to="/privacy-policy">
              Privacy Policy
            </Link>
          </ul>
        </div>
      </div>

      <div className={`${styles["footer__cr"]} container`}>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};
