import axios from "axios";
//
import FETCH_USER from "./types";

// const fetchUser-basic = () => {
//   const request = axios.get('api/current_user');

//   return {
//     type: FETCH_USER,
//     payload: request
//   }
// };

export const fetchUser = () => {
  return function(dispatch) {
    axios.get("api/current_user").then(res => {
      dispatch({ type: FETCH_USER, payload: res});
    });
  };
};
