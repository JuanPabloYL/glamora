import styles from "./Sidebar.module.css";

const productTypes = ["Blush", "Bronzer", "Eyebrow", "Eyeliner", "Eyeshadow"];
const brands = [
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
];

export const Sidebar = ({ state, dispatch }) => {
  // Function to handle radio button change
  const handleRadioChange = (type, value) => {
    dispatch({ type, payload: value });
  };

  return (
    <aside className={styles["sidebar"]}>
      <h2>Filters</h2>

      {/* Product Type Filter */}
      <div>
        <h3>Product Type</h3>
        {productTypes.map((type) => (
          <div key={type} className={styles["sidebar-filter"]}>
            <input
              type="radio"
              name="productType"
              checked={state.productType === type.toLowerCase()}
              onChange={() =>
                handleRadioChange("SET_PRODUCT_TYPE", type.toLowerCase())
              }
            />
            <label>{type}</label>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div>
        <h3>Brand</h3>
        {brands.map((brand) => (
          <div key={brand} className={styles["sidebar-filter"]}>
            <input
              type="radio"
              name="brand"
              checked={state.brand === brand.toLowerCase()}
              onChange={() =>
                handleRadioChange("SET_BRAND", brand.toLowerCase())
              }
            />
            <label>{brand}</label>
          </div>
        ))}
      </div>

      {/* Reset Filters Button */}
      <button
        className={styles["sidebar-reset"]}
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset Filters
      </button>
    </aside>
  );
};
