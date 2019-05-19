import {
   LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
   REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
   SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,
   FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
} from '../actions';

const initialState = {
   user: [],
   user_id: null,
   fetchingCreds: false,
   loggingIn: false,
   loginError: null,
   registering: false,
   registerError: null,
   signingUp: false,
   signUpError: null,
   error: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_START: {
         return {
            ...state,
            loggingIn: true,
            loginError: null,
         }
      }
      case LOGIN_SUCCESS: {
         return {
            ...state,
            loggingIn: false,
            user_id: action.payload
         }
      }
      case LOGIN_FAILURE: {
         return {
            ...state,
            loggingIn: false,
            loginError: "failed login"
         }
      }
      case REGISTER_START: {
         return {
            ...state,
            registering: true,
            registerError: null,
         }
      }
      case REGISTER_SUCCESS: {
         return {
            ...state,
            registering: false
         }
      }
      case REGISTER_FAILURE: {
         return {
            ...state,
            registering: false,
            registerError: "failed to register"
         }
      }
      case SIGNUP_START: {
         return {
            ...state,
            signingUp: true,
            signUpError: null,
         }
      }
      case SIGNUP_SUCCESS: {
         return {
            ...state,
            signingUp: false
         }
      }
      case SIGNUP_FAILURE: {
         return {
            ...state,
            signingUp: false,
            signUpError: "failed to sign up"
         }
      }
      case FETCH_START: {
         return {
            ...state,
            fetchingCreds: true
         }
      }
      case FETCH_SUCCESS: {
         return {
            ...state,
            fetchingCreds: false,
            creds: action.payload,
            filteredCreds: action.payload
         }
      }
      case FETCH_FAILURE: {
         return {
            ...state,
            fetchingCreds: false,
            error: action.payload
         }
      }
      default: 
      return state;
   }
}