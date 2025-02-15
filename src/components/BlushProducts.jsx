import { Products } from "./Products";
import { MainTemplate } from "./MainTemplate";

const title = "Blush";
const text =
  "Explore a world of color with our vibrant blush collection. Whether you're looking for a subtle, natural flush or a bold pop of color, our blushes are designed to enhance your complexion, adding a fresh and youthful glow that lasts all day.";

export const BlushProducts = () => {
  return (
    <MainTemplate title={title} text={text}>
      <Products apiURL="http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush" />
    </MainTemplate>
  );
};
