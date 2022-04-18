import axios from "axios";
import { setAlert } from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOADED,
    AUTH_ERROR,
} from "./types"
import setAuthToken from "../utilis/setAuthToken";
export let loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    let res = await axios.get("http://localhost:1000/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export let register =
  ({ EmailId, MobileNo, Pincode, Password, Password2 }) =>
  async (dispatch) => {
    let config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    let body = {
      EmailId,
      MobileNo,
      Pincode,
      Password,
      Password2,
    };
    console.log(body);
    try {
      let res = await axios.post(
        "http://localhost:1000/api/dealers/register",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {
      let errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "primary")));
      }
      dispatch({
        type: REGISTER_FAILURE,
      });
    }
  };
  export let login = (EmailId, Password) => async (dispatch) => {
    let config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    let body = {
      EmailId,
      Password,
    };
    console.log(body);
    try {
      let res = await axios.post(
        "http://localhost:1000/api/dealers/login",
        body,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {
      let errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "primary")));
      }
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };