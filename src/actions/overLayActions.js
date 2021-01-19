import { IS_LOADING, LOADED, SHOW_MESSAGE, HIDE_MESSAGE } from "../types";

export const onLoading = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
};
export const isLoaded = () => (dispatch) => {
  dispatch({ type: LOADED });
};

export const showMessage = (message) => (dispatch) => {
  dispatch({ type: SHOW_MESSAGE, payload: message });
};
export const hideMessage = () => (dispatch) => {
  dispatch({ type: HIDE_MESSAGE });
};
