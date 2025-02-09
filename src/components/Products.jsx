import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Product } from "./Product";
import { CgSortAz } from "react-icons/cg";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [maxProducts, setMaxProducts] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className={`${styles["products-container"]} container`}>
      <div className={styles["products-btns"]}>
        <button>
          <CgSortAz />
          Filter and Sort
        </button>
      </div>
      <span className={styles["products-number"]}>{maxProducts} products</span>

      <div className={styles["products"]}>
        {products.slice(0, maxProducts).map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
