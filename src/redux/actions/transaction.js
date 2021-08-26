import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;


export const createTransaction = (productId, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
      form.append('productId', productId)
    try{
      const {data} = await http(token).post(`${URL}/transaction/post-transaction`, form.toString())
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: data.message
    })
    }catch(err){
      dispatch({
        type: 'CREATE_TRANSACTION_FAILED',
        payload: err.response.data.message
    })
    }
  }
}
