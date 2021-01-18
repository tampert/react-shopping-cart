import { IS_LOADING, LOADED } from "../types";

export const overLayReducer = (state = { loading: "" }, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        loading: "active",
      };
    case LOADED:
      return {
        loading: "",
      };
    default:
      return state;
  }
};
