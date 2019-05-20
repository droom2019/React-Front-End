import axiosWithAuth from '../Helper';
import axios from 'axios';
import { CardActions } from '@material-ui/core';

// REGISTRATION ACTIONS

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
   dispatch({type: REGISTER_START});
   console.log(newUser);  

   return axios.post('https://droom-api.herokuapp.com/api/auth/register', newUser)
   .then(res => {
      console.log(res)
      dispatch({type: REGISTER_SUCCESS});
   })
   .catch(err => {
      console.log("register error:", err);
      dispatch({ type: REGISTER_FAILURE });
      return false
      })
}

// LOGIN ACTIONS

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});

   return axiosWithAuth().post('https://droom-api.herokuapp.com/api/auth/login', credentials)
      .then(res => {
         localStorage.setItem('token', res.data.token);
         console.log(res)
         dispatch({type: LOGIN_SUCCESS, payload:res.data.token});
      })
      .catch(err => {
         console.log("login error:", err);
        // if (err.response && err.response.status === 403) {
         localStorage.removeItem("token");
        // }
      dispatch({ type: LOGIN_FAILURE });
      })
}

// COMPANY SIGN UP ACTIONS

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";


export const companysignup = companies => dispatch => {
   dispatch({type: SIGNUP_START});
   console.log(companies);  

   return axiosWithAuth().post('https://droom-api.herokuapp.com/api/companies', companies)
   .then(res => {
      console.log(res)
      dispatch({type: SIGNUP_SUCCESS});
   })
   .catch(err => {
      console.log("login error:", err);
      dispatch({ type: SIGNUP_FAILURE });
      return false
      })
}

// JOBSEEKER SIGN UP ACTIONS

export const jobseekersignup = seekers => dispatch => {
   dispatch({type: SIGNUP_START});
   console.log(seekers);  

   return axiosWithAuth().post('https://droom-api.herokuapp.com/api/seekers', seekers)
   .then(res => {
      console.log(res)
      dispatch({type: SIGNUP_SUCCESS});
   })
   .catch(err => {
      console.log("login error:", err);
      dispatch({ type: SIGNUP_FAILURE });
      return false
      })
}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getUser = id => dispatch => {

   dispatch({type: FETCH_START});
   axiosWithAuth().get('https://droom-api.herokuapp.com/auth/', {
      headers: { Authorization: localStorage.getItem("token") }})
      .then(res => {
         console.log(res);
         dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: FETCH_FAILURE, payload: err})
      })
}

export const FETCH_COMPANY_START = "FETCH_START";
export const FETCH_COMPANY_SUCCESS = "FETCH_SUCCESS";
export const FETCH_COMPANY_FAILURE = "FETCH_FAILURE";

export const getCompany = () => dispatch => {
   dispatch({type: FETCH_COMPANY_START});
   axios.get('https://droom-api.herokuapp.com/api/companies')
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_COMPANY_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_COMPANY_FAILURE, payload: err})
     })
 }

export const FETCH_COMPANY_BY_ID_START = "FETCH_START";
export const  FETCH_COMPANY_BY_ID_SUCCESS = "FETCH_SUCCESS";
export const  FETCH_COMPANY_BY_ID_FAILURE = "FETCH_FAILURE";

 export const getCompanyById = id => dispatch => {
   dispatch({type: FETCH_COMPANY_BY_ID_START});
   axios.get(`https://droom-api.herokuapp.com/api/companies/:${id}`)
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_COMPANY_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_COMPANY_BY_ID_FAILURE, payload: err})
     })
 }

export const FETCH_SEEKER_START = "FETCH_START";
export const FETCH_SEEKER_SUCCESS = "FETCH_SUCCESS";
export const FETCH_SEEKER_FAILURE = "FETCH_FAILURE";

export const getSeeker = () => dispatch => {
   dispatch({type: FETCH_SEEKER_START});
   axios.get('https://droom-api.herokuapp.com/api/seekers')
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_SEEKER_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_SEEKER_FAILURE, payload: err})
     })
}