import { useEffect, useState } from "react";

import styles from "./Shop.module.css";
import { Sidebar } from "./Sidebar";
import { Products } from "./Products";
import { MainTemplate } from "./MainTemplate";

const text =
  "Explore the world of skincare with products designed to unlock your skin’s natural radiance. Our carefully curated range helps you discover new ways to nourish and hydrate, ensuring your skin is perfectly prepped to absorb all the enriching ingredients it needs for a glowing, healthy appearance.";

const title = "Explore";

export const Shop = ({ children }) => {
  const [filter, setFilters] = useState({});

  return (
    <MainTemplate text={text} title={title}>
      <Products apiURL="http://makeup-api.herokuapp.com/api/v1/products.json" />
    </MainTemplate>
  );
};
