import { Products } from "./Products";
import { MainTemplate } from "./MainTemplate";

const title = "Bronzer";
const text =
  "Explore the warmth and depth our bronzers bring to your skin. Designed to create a sun-kissed glow, our bronzers effortlessly blend to sculpt and define your features, giving you a radiant, healthy-looking complexion all year round.";

export const BronzerProducts = () => {
  return (
    <MainTemplate title={title} text={text}>
      <Products apiURL="http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer" />
    </MainTemplate>
  );
};
