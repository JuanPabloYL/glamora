import { useFetchProducts } from "../hooks/useFetchProducts";
import styles from "./Products.module.css";
import { Product } from "./Product";
import { CgSortAz } from "react-icons/cg";
import { Sidebar } from "./Sidebar";

export const Products = ({ apiURL }) => {
  const {
    products,
    // totalProducts,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    dispatch,
    state,
    loading,
  } = useFetchProducts(apiURL);

  return (
    <>
      {loading ? (
        <div className={`${styles["products-container"]} container`}>
          <Sidebar state={state} dispatch={dispatch} />
          <div className={styles["products-box"]}>
            <p className={styles["products-loading"]}>Loading Products...</p>
          </div>
        </div>
      ) : (
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
              Showing {products.length} of {products.length} products
            </span>

            {/* Product List */}
            <div className={styles["products"]}>
              {products.map((product) => (
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
      )}
    </>
  );
};
