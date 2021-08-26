const initialState = {
  sccMseg: '',
  errMseg : ''
}

const payment = (state= initialState, action) =>{
  switch(action.type){
    case 'CREATE_TRANSACTION' :{
      return{
        ...state,
        sccMseg: action.payload
      }
    }
    case 'CREATE_TRANSACTION_FAILED' :{
      return{
        ...state,
        errMseg: action.payload
      }
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default payment