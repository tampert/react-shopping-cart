import { IS_LOADING, LOADED, SHOW_MESSAGE, HIDE_MESSAGE } from "../types";

export const overLayReducer = (
  state = { loading: "", showMessage: "", message: "" },
  action
) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: "active",
      };
    case LOADED:
      return {
        ...state,
        loading: "",
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        showMessage: "active",
        message: action.payload,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        showMessage: "",
        message: "",
      };
    default:
      return state;
  }
};
