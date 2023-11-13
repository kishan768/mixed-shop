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
const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, isProductsLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isProductsLoading: false,
        mobile_products: action.payload.filter(
          (p) => p.category === "smartphones"
        ),
        laptop_products: action.payload.filter((p) => p.category === "laptops"),
        fragnence_products: action.payload.filter(
          (p) => p.category === "fragrances"
        ),
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, isProductsError: true, isProductsLoading: false };
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        isSingleProductLoading: true,
        isSingleProductError: false,
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        isSingleProductLoading: false,
        isSingleProductError: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        isSingleProductError: true,
        isSingleProductLoading: false,
      };

    case GRID_VIEW:
      return {
        ...state,
        gridView: true,
      };
    case LIST_VIEW:
      return {
        ...state,
        gridView: false,
      };

    default:
      throw new Error("unknown Action type");
  }
};

export default reducer;
