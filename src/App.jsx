import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";
import { MainApp } from "./components/MainApp";
import { BlushProducts } from "./components/BlushProducts";
import { BronzerProducts } from "./components/BronzerProducts";
import { EyebrowProducts } from "./components/EyebrowProducts";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blush" element={<BlushProducts />} />
        <Route path="/bronzer" element={<BronzerProducts />} />
        <Route path="/eyebrow" element={<EyebrowProducts />} />
        <Route path="/explore" element={<Shop />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
      <Footer />
    </div>
  );
};
