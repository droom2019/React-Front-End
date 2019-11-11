import React from "react";
import { connect } from "react-redux";
import { jobseekersignup } from "../actions";
import jwt from "jwt-decode";

class JobSeekerSignUp extends React.Component {
   state = {
      userId: jwt(localStorage.getItem("token")).subject,
      seeker: {
         firstName: "",
         lastName: "",
         profilePicture: "",
         month: "",
         day: "",
         year: "",
         country: "",
         state: "",
         city: "",
         zipcode: ""
      }
   };


   handleChange = e => {
      e.preventDefault();
      console.log("change seekers");
      this.setState({
      seekers: {
         ...this.state.seekers,
         [e.target.name]: e.target.value
      }
   });
};

   handleSubmit = e => {
      e.preventDefault();
      this.props.jobseekersignup(this.state)
      .then(res => res === false ? null : this.props.history.push("/jobseekerprofile")
      );
   };
   
   render() {
      
      return (
      <div className="registerContainer">
         <form onSubmit={this.handleSubmit}
         class="text-center border border-light p-5"
         >
            {this.props.signUpError && <p>Error on sign up, try again</p>}
            
            <p class="h4 mb-4">Job Seeker Sign Up</p>
            
            <div class="form-row">
               <div class="form-group col-md-6">
                  <label>First name</label>
               {/* <!-- First name--> */}
                  <input
                     type="text"
                     name="firstName"
                     value={this.state.seeker.firstName}
                     onChange={this.handleChange}
                     class="form-control mb-4"
                     placeholder="First Name"
                  />
                  </div>

               <div class="form-group col-md-6">
                  <label>Last name</label>
                  {/* <!-- Password --> */}
                  <input
                     type="text"
                     name="lastName"
                     value={this.state.seeker.lastName}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="Last Name"
                  />
               </div>
            </div>

                  {/* <!-- DOB --> */}
                  <label>Date of Birth</label>

                  <div class="form-row">
                     <div class="form-group col-md-6">
                     <label>Month</label>
                     <input
                        type="text"
                        name="month"
                        value={this.state.seeker.month}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="Month"
                     />
                     </div>

                  <div class="form-group col-md-2">
                  <label>Day</label>
                  <input
                     type="text"
                     name="day"
                     value={this.state.seeker.day}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="Day"
                  />
                  </div>

                  <div class="form-group col-md-4">
                  <label>Year</label>
                  <input
                     type="text"
                     name="year"
                     value={this.state.seeker.year}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="Year"
                  />
                  </div>
               </div>

               <div class="form-group">
                  <label>Country</label>
                  {/* <!-- Country --> */}
                  <input
                  type="text"
                  name="country"
                  value={this.state.seeker.country}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Country"
                  />
               </div>

               <div class="form-row">
                  <div class="form-group col-md-6">
                  <label>City</label>
                  {/* <!-- City --> */}
                  <input
                     type="text"
                     name="city"
                     value={this.state.seeker.city}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="City"
                  />
                  </div>

                  <div class="form-group col-md-4">
                  <label>State</label>
                  {/* <!-- State --> */}
                  <input
                     type="text"
                     name="state"
                     value={this.state.seeker.state}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="State"
                  />
                  </div>

                  <div class="form-group col-md-2">
                  <label>Zip</label>
                  {/* <!-- Zip Code --> */}
                  <input
                     type="text"
                     name="zipcode"
                     value={this.state.seeker.zipcode}
                     onChange={this.handleChange}
                     class="form-control"
                     placeholder="Zip code"
                  />
                  </div>
               </div>

               {/* <!-- Sign up button --> */}
               <button class="btn btn-info my-4 btn-block" type="submit">
                  Sign up
               </button>
            </form>
         {/* <!-- Default form register --> */}
         </div>
         );
      }
   }

const mapStateToProps = state => {
   return {
      signUpError: state.signUpError
   };
};

export default connect( mapStateToProps, { jobseekersignup })(JobSeekerSignUp);