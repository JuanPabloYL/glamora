import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div>
        <h4>Explore</h4>
        <ul>
          <Link to="/about-us">About Us</Link>
          <Link to="/terms-of-service">Terms Of Service</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </ul>
      </div>
    </footer>
  );
};
