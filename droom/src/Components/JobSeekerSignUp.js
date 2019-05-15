import React from 'react';
import { connect } from 'react-redux';
import { jobseekersignup } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class JobSeekerSignUp extends React.Component {
   state = {
      seekers: [
         {  userId: "",
            firstName: "John",
            lastName: "Dough",
            profilePicture:"",
            month:"2",
            day:"4",
            year:"1994",
            country:"US",
            state:"California",
            city: "San Francisco",
            zipcode:"93552",
            email: "",
            password: ""
         }
      ]
   };

   handleChange = e => {
      e.preventDefault();

      this.setState({
         seekers: {
            ...this.state.seekers,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()

      this.props.register(this.state.newUser)
      .then(res => (res === false) ? null : this.props.history.push("https://droom-buildweek-4-15-19.herokuapp.com/api/seekers")      
      );
   };

   render() {
      
      return (

         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.registerError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Job Seeker Sign Up</p>

               <div class="form-row">
                  <div class="form-group col-md-6">
                     <label for="inputEmail">Email</label>
                     {/* <!-- E-mail --> */}
                     <input type="email" id="defaultRegisterFormEmail" value={this.state.seekers.email} onChange={this.handleChange} class="form-control mb-4" placeholder="E-mail"/>
                  </div>

                  <div class="form-group col-md-6">
                     <label for="inputPassword">Password</label>
                     {/* <!-- Password --> */}
                     <input type="password" id="defaultRegisterFormPassword" value={this.state.seekers.password} onChange={this.handleChange} class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                     <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                     </small>
                  </div>
               </div>

                  {/* <!-- DOB --> */}
                  <div class="md-form">
                     <label for="date-picker-example">Date of Birth</label>
                     <input placeholder="Select date" type="text" id="date-picker-example" class="form-control datepicker"/>
                  </div>

                  <div class="form-group">
                     <label for="inputCountry">Country</label>
                     {/* <!-- Country --> */}
                     <input type="text" id="defaultRegisterFormLastName" value={this.state.seekers.country} onChange={this.handleChange} class="form-control" placeholder="Country"/>
                  </div>
                     
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        {/* <!-- City --> */}
                        <input type="text" id="defaultRegisterFormLastName" value={this.state.seekers.city} onChange={this.handleChange} class="form-control" placeholder="City"/>
                     </div>

                     <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        {/* <!-- State --> */}
                        <input type="text" id="defaultRegisterFormLastName" value={this.state.seekers.state} onChange={this.handleChange} class="form-control" placeholder="State"/>
                     </div>

                     <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        {/* <!-- Zip Code --> */}
                        <input type="text" id="defaultRegisterFormLastName" value={this.state.seekers.zipcode} onChange={this.handleChange} class="form-control" placeholder="Zip code"/>
                     </div>
               </div>

               {/* <!-- Sign up button --> */}
               <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

               {/* <!-- Social register --> */}
               <p>or sign up with:</p>

               <a type="button" class="light-blue-text mx-2">
                  <i class="fab fa-facebook-f"></i>
               </a>
               <a type="button" class="light-blue-text mx-2">
                  <i class="fab fa-twitter"></i>
               </a>
               <a type="button" class="light-blue-text mx-2">
                  <i class="fab fa-linkedin-in"></i>
               </a>
               <a type="button" class="light-blue-text mx-2">
                  <i class="fab fa-github"></i>
               </a>

               {/* <!-- Terms of service --> */}
               <p>By clicking
                  <em>Sign up</em> you agree to our
                  <a href="" target="_blank">terms of service</a>
                  </p>
            </form>
            {/* <!-- Default form register --> */}
         </div>
         )
      }
   }

const mapStateToProps = state => {
   return {
      registerError: state.registerError
   };
};

export default connect( mapStateToProps, { jobseekersignup })(JobSeekerSignUp);