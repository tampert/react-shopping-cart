import { SIGNIN, SIGNOUT, REGISTER, UPDATE } from "../types";

export const userReducer = (
  state = JSON.parse(localStorage.getItem("userInfo")) || {
    name: "",
    email: "",
    isAdmin: false,
  },
  action
) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case REGISTER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case UPDATE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case SIGNOUT:
      console.log("signout?");
      return {
        name: "",
        email: "",
        isAdmin: false,
      };
    default:
      return state;
  }
};
