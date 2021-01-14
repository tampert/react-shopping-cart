import { IS_LOADING, LOADED } from "../types";

export const loading = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
};
export const loaded = () => (dispatch) => {
  dispatch({ type: LOADED });
};
