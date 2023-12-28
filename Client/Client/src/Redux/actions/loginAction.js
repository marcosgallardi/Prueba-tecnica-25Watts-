import { server } from "../../helpers/endpoint";
import { setUser } from "../slices/loginSlice";
import axios from "axios";

export const loginAction = (email, password) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `${server}/users?email=${email}&password=${password}`
    );
    dispatch(setUser(data));
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};