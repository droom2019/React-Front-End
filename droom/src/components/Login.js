import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';
// import "mdbreact/dist/css/mdb.css";

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = (e) => {
    e.preventDefault()
    console.log("pushed login");

    this.props.login(this.state.credentials)
      .then(() => this.props.history.push("/account")
      );
  };

  render() {
    
    return (
      <div className = "loginContainer">
        <form class="border border-light p-5" onSubmit={this.handleLogin}>
        {this.props.loginError && <p>Error on login, try again</p>}
          <p class="h4 mb-4 text-center">Sign in</p>

          <label for="inputCompany">E-mail</label>
          <input 
          type="email" 
          name="email" 
          id="defaultLoginFormEmail" 
          class="form-control mb-4" 
          defaultValue={this.state.credentials.email}
          onChange={this.handleChange}
          placeholder="E-mail"
          />

          <label for="inputCompany">Password</label>
          <input 
          type="password"
          name="password" 
          id="defaultLoginFormPassword" 
          class="form-control mb-4" 
          defaultValue={this.state.credentials.password}
          onChange={this.handleChange}
          placeholder="Password"
          />
          
            <div class="d-flex justify-content-between">
                <div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                      <label class="custom-control-label" for="defaultLoginFormRemember">Remember me </label>
                      </div>
                </div>
                <div>
                    <a href=""> Forgot password?</a>
                </div>
              </div>

          <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

          <div class="text-center">
              <p>Not a member? 
                  <a href="">Register</a>
              </p>

              <p>or sign in with:</p>
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
          </div>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.loginError
  };
};

export default connect( mapStateToProps, { login })(Login);