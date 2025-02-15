import { Products } from "./Products";
import { MainTemplate } from "./MainTemplate";

const title = "Eyebrow";
const text =
  "Explore the perfect frame for your face with our eyebrow collection. From defining and shaping to filling and enhancing, our products are designed to give you natural-looking, flawless brows that complement your features and complete your makeup look.";

export const EyebrowProducts = () => {
  return (
    <MainTemplate title={title} text={text}>
      <Products apiURL="http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow" />
    </MainTemplate>
  );
};
