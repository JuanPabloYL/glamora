import { useEffect, useReducer, useState } from "react";
import styles from "./Products.module.css";
import { Product } from "./Product";
import { CgSortAz } from "react-icons/cg";
import { Sidebar } from "./Sidebar";

const initialState = {
  brand: "",
  productType: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_PRODUCT_TYPE":
      return { ...state, productType: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [maxProducts, setMaxProducts] = useState(20);
  const [state, dispatch] = useReducer(filterReducer, initialState); 
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; /

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://makeup-api.herokuapp.com/api/v1/products.json?";

      if (state.brand) url += `brand=${state.brand}&`;
      if (state.productType) url += `product_type=${state.productType}&`;

      if (state.brand == "" && state.productType == "") {
        url = "http://makeup-api.herokuapp.com/api/v1/products.json?";
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, [state]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={`${styles["products-container"]} container`}>
      {/* Mobile Screen Size */}
      <div className={styles["products-btns"]}>
        <button>
          <CgSortAz />
          Filter and Sort
        </button>
      </div>
      <Sidebar state={state} dispatch={dispatch} />

      {/* Laptop Screen Size */}
      <div className={styles["products-box"]}>
        <span className={styles["products-number"]}>
          Showing {currentProducts.length} of {products.length} products
        </span>

        {/* Product List */}
        <div className={styles["products"]}>
          {currentProducts.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className={styles["pagination"]}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
