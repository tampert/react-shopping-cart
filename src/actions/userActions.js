import { apiURL } from "../config";
import { SIGNIN } from "../types";
import { setUserInfo } from "../localStorage";

export const signin = (user) => async (dispatch) => {
  const { email, password } = user;

  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer {{token}}");
  myHeaders.append("x-lang", "{{x-lang}}");
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    email: email,
    password: password,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(`${apiURL}/api/users/signin`, requestOptions);
  const data = await res.json();

  setUserInfo(data);

  dispatch({
    type: SIGNIN,
    payload: data,
  });
};