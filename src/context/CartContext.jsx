/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  CART_LOADING_BEGIN,
  CLEAR_CART,
  DEC_QUANTITY,
  DELETE_CART_ITEM,
  INC_QUANTITY,
} from "../actions";

const CartContext = createContext();

const initialState = {
  cart: [],
  isCartLoading: false,
};

const CartProvider = ({ children }) => {
  const [{ cart, isCartLoading }, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: CART_LOADING_BEGIN });
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const incQuantity = (id) => {
    dispatch({ type: INC_QUANTITY, payload: id });
  };
  const decQuantity = (id) => {
    dispatch({ type: DEC_QUANTITY, payload: id });
  };
  const deleteCartItem = (id) => {
    dispatch({ type: DELETE_CART_ITEM, payload: id });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        incQuantity,
        decQuantity,
        addToCart,
        isCartLoading,
        clearCart,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
