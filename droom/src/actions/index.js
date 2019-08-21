import axiosWithAuth from '../Helper';
import axios from 'axios';
import jwt from "jwt-decode";

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

   return axiosWithAuth().post("https://droom-api.herokuapp.com/api/companies", companies)
   .then(res => {
      console.log(res)
      dispatch({type: SIGNUP_SUCCESS});
   })
   .catch(err => {
      console.dir(err)
      console.log("sign up error:", err.response);
      dispatch({ type: SIGNUP_FAILURE, payload: err.response });
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
     console.dir(err)
     console.log("sign up error:", err.response);
     dispatch({ type: SIGNUP_FAILURE, payload: err.response });
     return false
     })
}

export const FETCH_COMPANY_START = "FETCH_COMPANY_START";
export const FETCH_COMPANY_SUCCESS = "FETCH_COMPANY_SUCCESS";
export const FETCH_COMPANY_FAILURE = "FETCH_COMPANY_FAILURE";

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

export const FETCH_COMPANY_BY_ID_START = "FETCH_COMPANY_BY_ID_START";
export const  FETCH_COMPANY_BY_ID_SUCCESS = "FETCH_COMPANY_BY_ID_SUCCESS";
export const  FETCH_COMPANY_BY_ID_FAILURE = "FETCH_COMPANY_BY_ID_FAILURE";

export const getCompanyById = (id) => dispatch => {
   dispatch({type: FETCH_COMPANY_BY_ID_START});

   axios.get(`https://droom-api.herokuapp.com/api/companies/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res.data);
       dispatch({type: FETCH_COMPANY_BY_ID_SUCCESS, payload: res.data.companies})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_COMPANY_BY_ID_FAILURE, payload: err})
     })
 }

export const FETCH_SEEKER_START = "FETCH_SEEKER_START";
export const FETCH_SEEKER_SUCCESS = "FETCH_SEEKER_SUCCESS";
export const FETCH_SEEKER_FAILURE = "FETCH_SEEKER_FAILURE";

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

// Get Seeker By Id

export const FETCH_SEEKER_BY_ID_START = "FETCH_SEEKER_BY_ID_START";
export const  FETCH_SEEKER_BY_ID_SUCCESS = "FETCH_SEEKER_BY_ID_SUCCESS";
export const  FETCH_SEEKER_BY_ID_FAILURE = "FETCH_SEEKER_BY_ID_FAILURE";

export const getSeekerById = (id) => dispatch => {
   dispatch({type: FETCH_SEEKER_BY_ID_START});

   axios.get(`https://droom-api.herokuapp.com/api/seekers/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res.data);
       dispatch({type: FETCH_SEEKER_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_SEEKER_BY_ID_FAILURE, payload: err})
     })
 }


export const  UPDATE_SEEKER_START = "UPDATE_SEEKER_START";
export const  UPDATE_SEEKER_SUCCESS = "UPDATE_SEEKER_SUCCESSS";
export const  UPDATE_SEEKER_FAILURE = "UPDATE_SEEKER_FAILURE";

export const updateSeeker = (id) => dispatch => {
   dispatch({type: UPDATE_SEEKER_START});
   axios.put(`https://droom-api.herokuapp.com/api/seekers/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: UPDATE_SEEKER_SUCCESS, payload: res.data})
     })
     .catch(err => {
       dispatch({type: UPDATE_SEEKER_FAILURE, payload: err})
     })
 }

export const  UPDATE_COMPANY_START = "UPDATE_COMPANY_START";
export const  UPDATE_COMPANY_SUCCESS = "UPDATE_COMPANY_SUCCESS";
export const  UPDATE_COMPANY_FAILURE = "UPDATE_COMPANY_FAILURE";

 export const updateCompany = (id) => dispatch => {
   dispatch({type: UPDATE_COMPANY_START});
   axios.put(`https://droom-api.herokuapp.com/api/companies/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: UPDATE_COMPANY_SUCCESS, payload: res.data})
     })
     .catch(err => {
       dispatch({type: UPDATE_COMPANY_FAILURE, payload: err})
     })
 }



export const  DELETE_SEEKER_START = "DELETE_SEEKER_START";
export const  DELETE_SEEKER_SUCCESS = "DELETE_SEEKER_SUCCESSS";
export const  DELETE_SEEKER_FAILURE = "DELETE_SEEKER_FAILURE";

export const deleteSeeker = (id) => dispatch => {
   dispatch({type: DELETE_SEEKER_START});
   axios.delete(`https://droom-api.herokuapp.com/api/seekers/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: DELETE_SEEKER_SUCCESS, payload: res.data})
     })
     .catch(err => {
       dispatch({type: DELETE_SEEKER_FAILURE, payload: err})
     })
 }

export const  DELETE_COMPANY_START = "DELETE_COMPANY_START";
export const  DELETE_COMPANY_SUCCESS = "DELETE_COMPANY_SUCCESSS";
export const  DELETE_COMPANY_FAILURE = "DELETE_COMPANY_FAILURE";

 export const deleteCompany = (id) => dispatch => {
   dispatch({type: DELETE_COMPANY_START});
   axios.delete(`https://droom-api.herokuapp.com/api/companies/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: DELETE_COMPANY_SUCCESS, payload: res.data})
     })
     .catch(err => {
       dispatch({type: DELETE_COMPANY_FAILURE, payload: err})
     })
 }




 // MATCHES ACTIONS

export const FETCH_MATCHES_FOR_SEEKER_BY_ID_START = "FETCH_MATCHES_FOR_SEEKER_BY_ID_START";
export const FETCH_MATCHES_FOR_SEEKER_BY_ID_SUCCESS = "FETCH_MATCHES_FOR_SEEKER_BY_ID_SUCCESS";
export const FETCH_MATCHES_FOR_SEEKER_BY_ID_FAILURE = "FETCH_MATCHES_FOR_SEEKER_BY_ID_FAILURE";

export const getMatchesBySeekerId = (id) => dispatch => {
   dispatch({type: FETCH_MATCHES_FOR_SEEKER_BY_ID_START});
   axios.get(`https://droom-api.herokuapp.com/api/matches/seekers/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log("labelasdasda", res);
       dispatch({type: FETCH_MATCHES_FOR_SEEKER_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_MATCHES_FOR_SEEKER_BY_ID_FAILURE, payload: err})
     })
 }

export const FETCH_MATCHES_FOR_COMPANY_BY_ID_START = "FETCH_MATCHES_FOR_COMPANY_BY_ID_START";
export const FETCH_MATCHES_FOR_COMPANY_BY_ID_SUCCESS = "FETCH_MATCHES_FOR_COMPANY_BY_ID_SUCCESS";
export const FETCH_MATCHES_FOR_COMPANY_BY_ID_FAILURE = "FETCH_MATCHES_FOR_COMPANY_BY_ID_FAILURE";

export const getMatchesByCompanyId = (id) => dispatch => {
   dispatch({type: FETCH_MATCHES_FOR_COMPANY_BY_ID_START});
   axios.get(`https://droom-api.herokuapp.com/api/matches/company/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_MATCHES_FOR_COMPANY_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_MATCHES_FOR_COMPANY_BY_ID_FAILURE, payload: err})
     })
 }



export const FETCH_SEEKER_EDUCATION_BY_ID_START = "FETCH_SEEKER_EDUCATION_BY_ID_START";
export const FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS = "FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS";
export const FETCH_SEEKER_EDUCATION_BY_ID_FAILURE = "FETCH_SEEKER_EDUCATION_BY_ID_FAILURE";

export const getSeekerEducationById = id => dispatch => {
   dispatch({type: FETCH_SEEKER_EDUCATION_BY_ID_START});
   axios.get(`https://droom-api.herokuapp.com/api/education/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_SEEKER_EDUCATION_BY_ID_FAILURE, payload: err})
     })
}

export const FETCH_SEEKER_SKILL_BY_ID_START = "FETCH_SEEKER_SKILL_BY_ID_START";
export const FETCH_SEEKER_SKILL_BY_ID_SUCCESS = "FETCH_SEEKER_SKILL_BY_ID_SUCCESS";
export const FETCH_SEEKER_SKILL_BY_ID_FAILURE = "FETCH_SEEKER_SKILL_BY_ID_FAILURE";

export const getSeekerSkillById = id => dispatch => {
   dispatch({type: FETCH_SEEKER_SKILL_BY_ID_START});
   axios.get(`https://droom-api.herokuapp.com/api/education/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
     .then(res => {
       console.log(res);
       dispatch({type: FETCH_SEEKER_SKILL_BY_ID_SUCCESS, payload: res.data})
     })
     .catch(err => {
       console.log(err);
       dispatch({type: FETCH_SEEKER_SKILL_BY_ID_FAILURE, payload: err})
     })
}