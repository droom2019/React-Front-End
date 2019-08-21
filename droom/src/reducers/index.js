import {
   LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
   REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
   SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,

   FETCH_COMPANY_START, FETCH_COMPANY_SUCCESS, FETCH_COMPANY_FAILURE,
   FETCH_COMPANY_BY_ID_START, FETCH_COMPANY_BY_ID_SUCCESS, FETCH_COMPANY_BY_ID_FAILURE,

   FETCH_SEEKER_START, FETCH_SEEKER_SUCCESS, FETCH_SEEKER_FAILURE,
   FETCH_SEEKER_BY_ID_START, FETCH_SEEKER_BY_ID_SUCCESS, FETCH_SEEKER_BY_ID_FAILURE,
   FETCH_SEEKER_EDUCATION_BY_ID_START, FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS, FETCH_SEEKER_EDUCATION_BY_ID_FAILURE,

   UPDATE_COMPANY_START, UPDATE_COMPANY_SUCCESS, UPDATE_COMPANY_FAILURE,
   UPDATE_SEEKER_START, UPDATE_SEEKER_SUCCESS, UPDATE_SEEKER_FAILURE,

   DELETE_COMPANY_START, DELETE_COMPANY_SUCCESS, DELETE_COMPANY_FAILURE,
   DELETE_SEEKER_START, DELETE_SEEKER_SUCCESS, DELETE_SEEKER_FAILURE,

   FETCH_MATCHES_FOR_SEEKER_BY_ID_START, FETCH_MATCHES_FOR_SEEKER_BY_ID_SUCCESS, FETCH_MATCHES_FOR_SEEKER_BY_ID_FAILURE,
   FETCH_MATCHES_FOR_COMPANY_BY_ID_START, FETCH_MATCHES_FOR_COMPANY_BY_ID_SUCCESS, FETCH_MATCHES_FOR_COMPANY_BY_ID_FAILURE,

   FETCH_SEEKER_SKILL_BY_ID_START, FETCH_SEEKER_SKILL_BY_ID_SUCCESS, FETCH_SEEKER_SKILL_BY_ID_FAILURE
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
   fetchingCompany: false,
   fetchingSeeker: false,
   updatingSeeker: false,
   updatingCompany: false,
   deletingSeeker: false,
   deletingCompany: false,
   fetchingMatches: false,
   fetchingEducation: false,
   companies:[],
   seekers: [],
   matches: [],
   education: [],
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

      case FETCH_COMPANY_START: {
         return {
            ...state,
            fetchingCompanies: true
         }
      }
      case FETCH_COMPANY_SUCCESS: {
         return {
            ...state,
            fetchingCompanies: false,
            companies: action.payload,
         }
      }
      case FETCH_COMPANY_FAILURE: {
         return {
            ...state,
            fetchingCompanies: false,
            error: action.payload
         }
      }

      case FETCH_COMPANY_BY_ID_START: {
         return {
            ...state,
            fetchingCompanies: true
         }
      }
      case FETCH_COMPANY_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)

         return {
            ...state,
            fetchingCompanies: false,
            companies: action.payload,
         }
      }
      case FETCH_COMPANY_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingCompanies: false,
            error: action.payload
         }
      }

      case FETCH_SEEKER_START: {
         return {
            ...state,
            fetchingSeeker: true
         }
      }
      case FETCH_SEEKER_SUCCESS: {
         return {
            ...state,
            fetchingSeeker: false,
            seekers: action.payload,
         }
      }
      case FETCH_SEEKER_FAILURE: {
         return {
            ...state,
            fetchingSeeker: false,
            error: action.payload
         }
      }

      case FETCH_SEEKER_BY_ID_START: {
         return {
            ...state,
            fetchingSeeker: true
         }
      }
      case FETCH_SEEKER_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)
         return {
            ...state,
            fetchingSeeker: false,
            seekers: action.payload,
         }
      }
      case FETCH_SEEKER_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingSeeker: false,
            error: action.payload
         }
      }

      case UPDATE_SEEKER_START: {
         return {
           ...state,
           updatingSeeker: true,
           error: null
         }
       }
   
       case UPDATE_SEEKER_SUCCESS: {
         return {
           ...state,
           updatingSeeker: false,
           seekers: action.payload
         }
       }
       
       case UPDATE_SEEKER_FAILURE: {
         return {
           ...state,
           updatingSeeker: false,
           error: action.payload
         }
       }

       case UPDATE_COMPANY_START: {
         return {
           ...state,
           updatingCompany: true,
           error: null
         }
       }
   
       case UPDATE_COMPANY_SUCCESS: {
         return {
           ...state,
           updatingCompany: false,
           companies: action.payload
         }
       }
       
       case UPDATE_COMPANY_FAILURE: {
         return {
           ...state,
           updatingCompany: false,
           error: action.payload
         }
       }

      case DELETE_SEEKER_START: {
         return {
           ...state,
           deletingSeeker: true,
           error: null
         }
       }
   
       case DELETE_SEEKER_SUCCESS: {
         return {
           ...state,
           deletingSeeker: false,
           seekers: action.payload
         }
       }
       
       case DELETE_SEEKER_FAILURE: {
         return {
           ...state,
           deletingSeeker: false,
           error: action.payload
         }
       }

       case DELETE_COMPANY_START: {
         return {
           ...state,
           deletingCompany: true,
           error: null
         }
       }
   
       case DELETE_COMPANY_SUCCESS: {
         return {
           ...state,
           deletingCompany: false,
           companies: action.payload
         }
       }
       
       case DELETE_COMPANY_FAILURE: {
         return {
           ...state,
           deletingCompany: false,
           error: action.payload
         }
       }

       case FETCH_MATCHES_FOR_SEEKER_BY_ID_START: {
         return {
            ...state,
            fetchingMatches: true
         }
      }
      case FETCH_MATCHES_FOR_SEEKER_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)
         return {
            ...state,
            fetchingMatches: false,
            matches: action.payload,
         }
      }
      case FETCH_MATCHES_FOR_SEEKER_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingMatches: false,
            error: action.payload
         }
      }

      case FETCH_MATCHES_FOR_COMPANY_BY_ID_START: {
         return {
            ...state,
            fetchingMatches: true
         }
      }
      case FETCH_MATCHES_FOR_COMPANY_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)
         return {
            ...state,
            fetchingMatches: false,
            matches: action.payload,
         }
      }
      case FETCH_MATCHES_FOR_COMPANY_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingMatches: false,
            error: action.payload
         }
      }

      case FETCH_SEEKER_EDUCATION_BY_ID_START: {
         return {
            ...state,
            fetchingEducation: true
         }
      }
      case FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)
         return {
            ...state,
            fetchingEducation: false,
            education: action.payload,
         }
      }
      case FETCH_SEEKER_EDUCATION_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingEducation: false,
            error: action.payload
         }
      }

      case FETCH_SEEKER_SKILL_BY_ID_START: {
         return {
            ...state,
            fetchingSkill: true
         }
      }
      case FETCH_SEEKER_EDUCATION_BY_ID_SUCCESS: {
         console.log("action.payload", action.payload)
         return {
            ...state,
            fetchingSkill: false,
            seekerSkill: action.payload,
         }
      }
      case FETCH_SEEKER_EDUCATION_BY_ID_FAILURE: {
         return {
            ...state,
            fetchingEducation: false,
            error: action.payload
         }
      }

      default: 
      return state;
   }
}