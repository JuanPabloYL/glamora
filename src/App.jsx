import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};
