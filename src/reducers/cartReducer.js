import {
  ADD_TO_CART,
  CART_LOADING_BEGIN,
  CLEAR_CART,
  DEC_QUANTITY,
  DELETE_CART_ITEM,
  INC_QUANTITY,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === CART_LOADING_BEGIN) {
    return {
      ...state,
      isCartLoading: true,
    };
  }
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      isCartLoading: false,
    };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
      isCartLoading: false,
    };
  }
  if (action.type === DELETE_CART_ITEM) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === INC_QUANTITY) {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          subTotalPrice: newQuantity * item.price,
        };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DEC_QUANTITY) {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let newQuantity = item.quantity - 1;

        return {
          ...item,
          quantity: newQuantity,
          subTotalPrice: newQuantity * item.price,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  throw new Error("unknown action type");
};

export default reducer;
