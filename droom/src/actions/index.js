import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});

   return axios.post('https://droom-buildweek-4-15-19.herokuapp.com/auth/user/login', credentials)
      .then(res => {
         localStorage.setItem('token', res.data.token);
        console.log(res)
         dispatch({type: LOGIN_SUCCESS, payload: res.data.id});
      })
      .catch(err => {
         console.log("login error:", err);
        // if (err.response && err.response.status === 403) {
          localStorage.removeItem("token");
        // }
      dispatch({ type: LOGIN_FAILURE });
      })
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (newUser) => dispatch => {
  dispatch({type: REGISTER_START});
  console.log(newUser);  
  
  return axios.post('https://droom-buildweek-4-15-19.herokuapp.com/auth/register', newUser)
  .then(res => {
    console.log(res)
    dispatch({type: REGISTER_SUCCESS});
  })
  .catch(err => {
        console.log("login error:", err);
        dispatch({ type: REGISTER_FAILURE });
        return false
      })

}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getUser = id => dispatch => {

   dispatch({type: FETCH_START});
   axios.get('https://droom-buildweek-4-15-19.herokuapp.com/auth/', {
      headers: { Authorization: localStorage.getItem("token") }})
      .then(res => {
         console.log(res);
         dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: FETCH_FAILURE, payload: err})
      })
}