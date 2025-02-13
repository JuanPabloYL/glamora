import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";
import { MainApp } from "./components/MainApp";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};
