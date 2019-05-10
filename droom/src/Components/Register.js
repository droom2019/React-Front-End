import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class Register extends React.Component {
   state = {
      newUser: {
         username: "",
         password: "",
         userType: "",
         firstName: "",
         lastName: "",
         company:"",
         age:"",
         skills: ""
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
      .then(res => (res === false) ? null : this.props.history.push("/users")      
      );
   };

   render() {

      return (
         <div>
            <Form onSubmit={this.handleSubmit}>
               <h2>Register</h2>
               {this.props.registerError && <p>Error on sign up, try again</p>}
               <Label htmlFor="firstName">First Name:</Label>
               <Input name="firstName" value={this.state.newUser.firstName} onChange={this.handleChange} placeholder="First Name" />
               <Label htmlFor="lastName">Last Name:</Label>
               <Input name="lastName" value={this.state.newUser.lastName} onChange={this.handleChange} placeholder="Last Name" />
               <Label htmlFor="username">Username:</Label>
               <Input name="username" value={this.state.newUser.username} onChange={this.handleChange} placeholder="Username" />
               <Label htmlFor="password">Password:</Label>
               <Input name="password" type='password' value={this.state.newUser.password} onChange={this.handleChange} placeholder="Password" />
               <Label htmlFor="age">Age:</Label>
               <Input name="age" type='number' value={this.state.newUser.age} onChange={this.handleChange} placeholder="Age" />
               <Label htmlFor="company">Company:</Label>
               <Input name="company" value={this.state.newUser.company} onChange={this.handleChange} placeholder="Company" />
               <LoginButton>Register</LoginButton>
            </Form>
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

export default (Register);