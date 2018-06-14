import axios from "axios";
import types from "./types";

function showUserDetails() {
  const request = axios.get("/api/getUserData");
  return dispatch => {
    request.then(res => {
      console.log(res.data);
      dispatch({
        type: types.showUserDetails,
        payload: res.data
      });
    });
  };
}

export {showUserDetails};
