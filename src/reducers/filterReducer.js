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
const reducer = (state, action) => {
  if (action.type === PRODUCT_LOAD) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);
    return {
      ...state,
      allProducts: action.payload,
      filteredProducts: state.allProducts.sort((a, b) => a.price - b.price),
      filter: { ...state.filter, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SORT_BY_LOWEST) {
    return {
      ...state,
      filteredProducts: state.allProducts.sort((a, b) => a.price - b.price),
    };
  }
  if (action.type === SORT_BY_HIGHEST) {
    return {
      ...state,
      filteredProducts: state.allProducts.sort((a, b) => b.price - a.price),
    };
  }
  if (action.type === SORT_BY_ATOZ) {
    return {
      ...state,
      filteredProducts: state.allProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
    };
  }
  if (action.type === SORT_BY_ZTOA) {
    return {
      ...state,
      filteredProducts: state.allProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      ),
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filter: { ...state.filter, [name]: value },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { search, category, discount, brand, price } = state.filter;

    let tempProducts = [...state.allProducts];

    //filtering

    // text
    if (search) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(search)
      );
    }
    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    // discount

    if (discount) {
      tempProducts = tempProducts.filter(
        (product) => product.discountPercentage >= discount
      );
    }

    // brand
    if (brand !== "all") {
      tempProducts = tempProducts.filter((product) => product.brand === brand);
    }

    // price

    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }
  if (action.type === CLEAR_FILTER) {
    // console.log(state.filter.max_price);
    return {
      ...state,
      filter: {
        ...state.filter,
        search: "",
        category: "all",
        discount: 0,
        brand: "all",
        price: state.filter.max_price,
      },
    };
  }

  throw new Error("unknown Action type");
};
export default reducer;
