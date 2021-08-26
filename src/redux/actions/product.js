import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const searchProducts = (search, page, filterAirline, filterPrice1, filterPrice2, filterDeparture1,filterArrive1, filterTransit1) => {
  if(!search.startsWith('http')){
    return async (dispatch) => {
      const {data} = await http().get(`${URL}/products/?search=${search}&page=${page}&filterAirline=${filterAirline}&filterPrice1=${filterPrice1}&filterPrice2=${filterPrice2}&filterDeparture1=${filterDeparture1}&filterArrive1=${filterArrive1}&filterTransit1=${filterTransit1}`,)
      dispatch({
        type: 'SEARCH_PRODUCT',
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        }
    })
    }
  }else{
    return async (dispatch) => {
      const {data} = await http().get(search)
      dispatch({
        type: 'SEARCH_GET_NEXT',
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        }
      })
    }
  }
}


export const getDetails = (id) => {
  return async (dispatch) => {
    const {data} = await http().get(`${URL}/products/${id}`)
    dispatch({
      type: 'PRODUCTS_GET_DETAILS',
      payload: data.results,
    })
  }
}