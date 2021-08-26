/* eslint-disable no-unused-vars */
import { airLineData } from "../../dummy/airLineData";

const initialState = {
  search: {},
  pageInfo: {},
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_PRODUCT': {
      return {
        ...state,
        search: action.payload.products,
        pageInfo: action.payload.pageInfo
      } 
    }
    case 'SEARCH_GET_NEXT': {
      return {
        ...state,
        search:[ 
          ...state.data,
          ...action.payload.products
        ],
        pageInfo: action.payload.pageInfo
      } 
    }
    default:
      return {
        ...state,
      };
  }
};

export default product;
