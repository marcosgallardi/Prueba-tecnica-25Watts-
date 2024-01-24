import { server } from "../../helpers/endpoint";
import { setLogin } from "../slices/loginSlice";
import axios from "axios";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${server}users`, {
      email,
      password,
    });
    
    dispatch(setLogin(data));
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
