import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

class Register extends React.Component {
   state = {
      newUser: {
         email: "",
         password: "",
      }
   };

   handleChange = e => {
      e.preventDefault();
      console.log("change")
      this.setState({
         newUser: {
            ...this.state.newUser,
            [e.target.name]: e.target.value
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()
      this.props.register(this.state.newUser)
      .then(res => (res === false) ? null : this.props.history.push("/login")      
      );
   };

   render() {

      return (
         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.registerError && <p>You are already registered. Please login.</p>}
               
               <p class="h4 mb-4">Register</p>

               <label>E-mail</label>
               {/* <!-- E-mail --> */}
               <input type="email" name="email" id="defaultRegisterFormEmail" value={this.state.newUser.email} onChange={this.handleChange} class="form-control mb-4" placeholder="E-mail"/>

               <label>Password</label>
               {/* <!-- Password --> */}
               <input type="password" name="password" id="defaultRegisterFormPassword" value={this.state.newUser.password} onChange={this.handleChange} class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
               <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                  At least 8 characters and 1 digit
               </small>

               {/* <!-- Sign up button --> */}
               <button class="btn btn-info my-4 btn-block" type="submit">Register</button>

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