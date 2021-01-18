import { IS_LOADING, LOADED } from "../types";

export const onLoading = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
};
export const isLoaded = () => (dispatch) => {
  dispatch({ type: LOADED });
};
