/* eslint-disable react/prop-types */
import { useEffect, useReducer, useContext, createContext } from "react";
import reducer from "../reducers/productsReducer";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GRID_VIEW,
  LIST_VIEW,
} from "../actions";
import { PRODUCT_URL } from "../helper/getUrl";

const ProductsContext = createContext();
const initialState = {
  isProductsLoading: false,
  isProductsError: false,
  isSingleProductLoading: false,
  isSingleProductError: false,
  singleProduct: [],
  products: [],
  mobile_products: [],
  laptop_products: [],
  fragnence_products: [],
  gridView: true,
};
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isProductsLoading,
    isProductsError,
    products,
    isSingleProductLoading,
    isSingleProductError,
    singleProduct,
    mobile_products,
    laptop_products,
    fragnence_products,
    gridView,
  } = state;
  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const resp = await fetch(`${PRODUCT_URL}`);
      const data = await resp.json();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const resp = await fetch(`${PRODUCT_URL}/${id}`);
      const data = await resp.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  function switchGrid() {
    dispatch({ type: GRID_VIEW });
  }
  function switchList() {
    dispatch({ type: LIST_VIEW });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isProductsLoading,
        isProductsError,
        products,
        mobile_products,
        laptop_products,
        fragnence_products,
        fetchSingleProduct,
        isSingleProductLoading,
        isSingleProductError,
        singleProduct,
        gridView,
        switchGrid,
        switchList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
