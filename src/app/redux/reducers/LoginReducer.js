import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  RESET_PASSWORD,
  CLOSE_POPUP
  
} from "../actions/LoginActions";

const initialState = {
  success: false,
  loading: false,
  popUp: false,
  error: {
    username: null,
    password: null
  }
};

const LoginReducer = function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        success: true,
        loading: false
      };
    }
    case LOGIN_ERROR: {
      return {
        success: false,
        loading: false,
        popUp: true,
        error: action.data
      };
    }
    case CLOSE_POPUP: {
      return{
        success:false,
        loading:false,
        popUp:false
      }
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
