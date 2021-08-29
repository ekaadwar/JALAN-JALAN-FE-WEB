const initialState = {
  data: {},
  errMsg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "GET_PROFILE_FAILED": {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
