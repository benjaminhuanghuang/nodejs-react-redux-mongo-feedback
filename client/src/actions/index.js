import axios from "axios";
//
import { FETCH_USER } from "./types";

const fetchUser_v0 = () => {
  const request = axios.get("/api/current_user");

  return {
    type: FETCH_USER,
    payload: request.data
  };
};

export const fetchUser_v1 = () => {
  return function(dispatch) {
    axios.get("/api/current_user").then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};

export const fetchUser_v2 = () => dispatch => {
  axios.get("/api/current_user").then(res => {
    dispatch({ type: FETCH_USER, payload: res.data });
  });
};

// App boots up -> fetch user -> header update
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  console.log("fetchUser", res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// User pay money -> send back user -> header update
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
