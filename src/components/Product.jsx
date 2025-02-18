import { FiShoppingCart } from "react-icons/fi";

import styles from "./Product.module.css";

export const Product = ({ item }) => {
  const { api_featured_image, name, price, brand } = item;
  return (
    <div className={styles["product"]}>
      <div className={styles["product__img-container"]}>
        <img src={api_featured_image} alt={name} />
        <div className={styles["product__cart-icon"]}>
          <FiShoppingCart />
        </div>
      </div>
      <div className={styles["product__description"]}>
        <p className={styles["product__brand"]}>{brand}</p>
        <p className={styles["product__name"]}>{name}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};
