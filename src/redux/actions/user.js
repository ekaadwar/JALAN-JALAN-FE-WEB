import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getUserById = (token, id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await http(token).get(`${URL}/profile/${id}`);
    dispatch({
      type: "GET_USER_BY_ID",
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: "GET_USER_BY_ID_FAILED",
      payload: err.response.data.message,
    });
  }
};
