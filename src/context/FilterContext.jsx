/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  SORT_BY_LOWEST,
  SORT_BY_HIGHEST,
  SORT_BY_ATOZ,
  SORT_BY_ZTOA,
  PRODUCT_LOAD,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
} from "../actions";
import { useProductsContext } from "./ProductsContext";
const FilterContext = createContext();
const initialState = {
  filteredProducts: [],
  allProducts: [],
  filter: {
    search: "",
    category: "all",
    discount: 0,
    brand: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [{ filteredProducts, filter, allProducts }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: PRODUCT_LOAD, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, filter]);

  function sortedBy(input) {
    switch (input) {
      case "lowest":
        dispatch({ type: SORT_BY_LOWEST });
        break;
      case "highest":
        dispatch({ type: SORT_BY_HIGHEST });
        break;
      case "AtoZ":
        dispatch({ type: SORT_BY_ATOZ });
        break;
      case "ZtoA":
        dispatch({ type: SORT_BY_ZTOA });
        break;
      default:
        throw new Error("wrong input");
    }
  }

  function updateFilters(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    // console.log(value);
    if (name === "price") {
      value = Number(e.target.value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }

  function clearFilters() {
    dispatch({ type: CLEAR_FILTER });
  }

  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        filter,
        allProducts,
        dispatch,
        sortedBy,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
