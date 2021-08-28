import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/profile/detailUserAndCard`);
    dispatch({
      type: "GET_PROFILE",
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: "GET_PROFILE_FAILED",
      payload: err.response.data.message,
    });
  }
};
