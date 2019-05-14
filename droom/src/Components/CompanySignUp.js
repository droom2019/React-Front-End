import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class CompanySignUp extends React.Component {
   state = {
      newUser: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         phone: "",
         company:"",
         skills: "",
         userType:"",
         posting:"",
      }
   };

   handleChange = e => {
      e.preventDefault();

      this.setState({
         newUser: {
            ...this.state.newUser,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()

      // this.props.register(this.state.newUser)
      // .then(res => (res === false) ? null : this.props.history.push("/register")      
      // );
   };

   render() {

      return (
         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.registerError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Company Sign Up</p>
               <div class="form-row mb-4">
                  <div class="col">
                        {/* <!-- First name --> */}
                        <input type="text" id="defaultRegisterFormFirstName" value={this.state.newUser.firstName} onChange={this.handleChange} class="form-control" placeholder="First name"/>
                  </div>
                  <div class="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" value={this.state.newUser.lastName} onChange={this.handleChange} class="form-control" placeholder="Last name"/>
                  </div>
               </div>

               {/* <!-- E-mail --> */}
               <input type="email" id="defaultRegisterFormEmail" value={this.state.newUser.email} onChange={this.handleChange} class="form-control mb-4" placeholder="E-mail"/>

               {/* <!-- Password --> */}
               <input type="password" id="defaultRegisterFormPassword" value={this.state.newUser.password} onChange={this.handleChange} class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
               <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                  At least 8 characters and 1 digit
               </small>

               {/* <!-- Phone number --> */}
               <input type="text" id="defaultRegisterPhonePassword" value={this.state.newUser.phone} onChange={this.handleChange} class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
               <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                  Optional - for two step authentication
               </small>

               {/* <!-- Newsletter --> */}
               <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter"/>
                  <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
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

// export default connect( mapStateToProps, { register })(Register);

export default (CompanySignUp);