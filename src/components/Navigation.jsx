import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

import { CgFacebook, CgTwitter, CgInstagram } from "react-icons/cg";

import styles from "./Navigation.module.css";
import { useState } from "react";

export const Navigation = () => {
  const [openModal, setOpenModal] = useState(true);
  console.log(openModal);

  return (
    <div className={styles.navigation}>
      <div className={styles["toggle-nav"]}>
        <FiMenu
          className={`${styles.burguer} ${!openModal ? styles.close : ""}`}
          onClick={() => setOpenModal(!openModal)}
        />
        <FiX
          className={`${styles["x-close"]}  ${openModal ? styles.close : ""}`}
          onClick={() => setOpenModal(!openModal)}
        />
      </div>

      <div className={`${styles["user-actions"]}`}>
        <FiSearch className={`${styles["search"]}`} />
        <FiShoppingCart className={`${styles["cart"]}`} />
      </div>

      <div
        className={`${styles["navigation-nav__container"]} ${
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
            <a href="#" className={styles["login-mobile"]}>
              <FiUser /> Log In
            </a>

            <div className={styles["navigation__user-actions-laptop"]}>
              <FiSearch />
              <FiUser />
              <FiShoppingCart />
            </div>

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
