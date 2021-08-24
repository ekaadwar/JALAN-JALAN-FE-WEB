import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env


export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)
    try{
      const {data} = await http().post(`${URL}/auth/Login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token
    })
    }catch(err){
      console.log("ini eror kenapa" ,err);
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
    })
    }
  }
}

export const authRegister = (name, email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('name', name)
    form.append('email', email)
    form.append('password', password)
    try{
      const {data} = await http().post(`${URL}/auth`, form.toString())
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message
    })
    }catch(err){
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: err.response.data.message
    })
    }
  }
}

export const authLogOut = () =>({
  type: 'AUTH_LOGOUT'
})
