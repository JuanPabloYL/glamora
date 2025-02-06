import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

import { CgFacebook, CgTwitter, CgInstagram } from "react-icons/cg";

import styles from "./Navigation.module.css";
import { useState } from "react";

export const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <div className={styles.navigation}>
      <div className={styles["toggle-nav"]}>
        <FiMenu className={styles.burguer} />
        <FiX
          className={`${styles["x-close"]} ${styles.close} ${
            openModal ? styles.close : ""
          }`}
          onClick={() => setOpenModal(!openModal)}
        />
      </div>

      <div className="user-actions">
        <FiSearch />
        <FiShoppingCart />
      </div>

      <div
        className={`${styles["navigation-nav__container"]} ${styles.close} ${
          openModal ? styles.close : ""
        }`}
      >
        <nav className={styles["navigation__nav"]}>
          <div className={styles["navigation__links"]}>
            <a href="#">Brands</a>
            <a href="#">Skincare</a>
            <a href="#">HairCare</a>
            <a href="#">BodyCare</a>
            <a href="#">Explore</a>
          </div>

          <div className={styles["navigation__user-actions"]}>
            <a href="#">
              <FiUser /> Log In
            </a>

            <div className={styles["navigation__media"]}>
              <CgFacebook />
              <CgTwitter />
              <CgInstagram />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
