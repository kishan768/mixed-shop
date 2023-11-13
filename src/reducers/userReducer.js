import { GET_USER } from "../actions";

const reducer = (state, action) => {
  if (action.type === GET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }

  throw new Error("unknown action type");
};

export default reducer;
