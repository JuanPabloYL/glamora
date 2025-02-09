import styles from "./Sidebar.module.css";

const productType = ["Blush", "Bronzer", "Eyebrow", "Eyeliner", "Eyeshadow"];
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

export const Sidebar = () => {
  return (
    <aside className={styles["sidebar"]}>
      <h2>Filters</h2>
      <div className={styles["sidebar-brand"]}>
        <div>
          <h3>Product Type</h3>
          {productType.map((brand) => (
            <div key={brand}>
              <input type="checkbox" name="product-type" />
              <label>{brand}</label>
            </div>
          ))}
        </div>

        <div>
          <h3>Brand</h3>
          {brands.map((brand) => (
            <div key={brand}>
              <input type="checkbox" name="product-type" />
              <label>{brand}</label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
