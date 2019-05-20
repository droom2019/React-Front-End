import React from 'react';
import { connect } from 'react-redux';
import { jobseekersignup } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class JobSeekerSignUp extends React.Component {
   state = {
      userId: "",
      seekers: {
         firstName: "",
         lastName: "",
         profilePicture:"",
         month:"",
         day:"",
         year:"",
         country:"",
         state:"",
         city: "",
         zipcode:""
      }
   };

   handleChange = e => {
      e.preventDefault();

      this.setState({
         seekers: {
            ...this.state.seekers,
            [e.target.name]: e.target.type
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()

      this.props.jobseekersignup(this.state.seekers)
      .then(res => (res === false) ? null : this.props.history.push("/jobseekerprofile")      
      );
   };

   render() {
      
      return (

         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.signUpError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Job Seeker Sign Up</p>

               <div class="form-row">
                  <div class="form-group col-md-6">
                     <label>First name</label>
                     {/* <!-- First name--> */}
                     <input 
                     type="firstName" 
                     name="firstName" 
                     value={this.state.seekers.firstName} 
                     onChange={this.handleChange} 
                     class="form-control mb-4" 
                     placeholder="First Name"/>
                  </div>

                  <div class="form-group col-md-6">
                     <label>Last name</label>
                     {/* <!-- Password --> */}
                     <input 
                     type="lastName" 
                     name="lastName" 
                     value={this.state.seekers.lastName} 
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
                        value={this.state.seekers.month} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="Month"
                        />
                     </div>
                     
                     <div class="form-group col-md-2">
                     <label>Day</label>
                        <input 
                        type="day" 
                        name="day"
                        value={this.state.seekers.day} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="Day"
                        />
                     </div>

                     <div class="form-group col-md-4">
                     <label>Year</label>
                        <input 
                        type="year" 
                        name="year"
                        value={this.state.seekers.year} 
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
                     type="country" 
                     name="country"
                     value={this.state.seekers.country} 
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
                        type="city"
                        name="city"
                        value={this.state.seekers.city} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="City"
                        />
                     </div>

                     <div class="form-group col-md-4">
                        <label>State</label>
                        {/* <!-- State --> */}
                        <input 
                        type="state" 
                        name="state" 
                        value={this.state.seekers.state} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="State"
                        />
                     </div>

                     <div class="form-group col-md-2">
                        <label>Zip</label>
                        {/* <!-- Zip Code --> */}
                        <input 
                        type="zipcode" 
                        type="zipcode" 
                        value={this.state.seekers.zipcode} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="Zip code"
                        />
                     </div>
                  </div>

               {/* <!-- Sign up button --> */}
               <button class="btn btn-info my-4 btn-block" type="submit">Sign up</button>
            </form>
            {/* <!-- Default form register --> */}
         </div>
         )
      }
   }

const mapStateToProps = state => {
   return {
      signUpError: state.signUpError
   };
};

export default connect( mapStateToProps, { jobseekersignup })(JobSeekerSignUp);