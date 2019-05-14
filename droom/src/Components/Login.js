import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
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

    this.props.login(this.state.credentials)
      .then(() => this.props.history.push("/login")
      );
  };

  render() {
    
    return (
      <div className = "loginContainer">
        <form class="border border-light p-5">
          <p class="h4 mb-4 text-center">Sign in</p>
          <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"/>
          <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>
          
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

export default Login;

{/* const mapStateToProps = state => {
  return {
    loginError: state.loginError
  };
}; */}

{/* export default connect( mapStateToProps, { login })(Login); */}