import axios from "axios";
import { server } from "../../helpers/endpoint";

export const actionTarjetas = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}`);
  } catch (error) {}
};
