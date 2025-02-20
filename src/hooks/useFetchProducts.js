import { useState, useEffect, useReducer } from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_PRODUCT_TYPE":
      return { ...state, productType: action.payload };
    case "RESET":
      return { brand: "", productType: "" };
    default:
      return state;
  }
};

export const useFetchProducts = (
  baseUrl,
  initialFilters = { brand: "", productType: "" },
  productsPerPage = 20
) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search
  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(filterReducer, initialFilters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let url = `${baseUrl}?`;

      if (state.brand) url += `brand=${state.brand}&`;
      if (state.productType) url += `product_type=${state.productType}&`;

      if (!state.brand && !state.productType) {
        url = baseUrl;
      }

      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [state, baseUrl]);

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return {
    products: currentProducts,
    totalProducts: filteredProducts.length,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    dispatch,
    state,
    loading,
    searchQuery,
    setSearchQuery,
  };
};
