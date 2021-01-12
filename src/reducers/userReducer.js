import { SIGNIN } from "../types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    default:
      return state;
  }
};
