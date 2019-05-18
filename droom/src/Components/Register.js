import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class Register extends React.Component {
   state = {
      newUser: {
         email: "",
         password: "",
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

      this.props.register(this.state.newUser)
      .then(res => (res === false) ? null : this.props.history.push("/register")      
      );
   };

   render() {

      return (
         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.registerError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Sign up</p>

               {/* <!-- E-mail --> */}
               <input type="email" id="defaultRegisterFormEmail" defaultValue={this.state.newUser.email} onChange={this.handleChange} class="form-control mb-4" placeholder="E-mail"/>

               {/* <!-- Password --> */}
               <input type="password" id="defaultRegisterFormPassword" defaultValue={this.state.newUser.password} onChange={this.handleChange} class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
               <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                  At least 8 characters and 1 digit
               </small>

               {/* <!-- Sign up button --> */}
               <button class="btn btn-info my-4 btn-block" type="submit">Sign Up</button>

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

export default connect( mapStateToProps, { register })(Register);