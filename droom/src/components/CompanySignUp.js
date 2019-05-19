import React from 'react';
import { connect } from 'react-redux';
import { companysignup } from '../actions';
import { Label, Input, LoginButton, Form } from '../StyledComponents';

class CompanySignUp extends React.Component {
   state = {
      userId: "",
      companies: {
         companyName: "",
         companyPicture: "",
         companyDescription: "",
         country: "",
         state: "",
         city: "",
         zipcode: ""
      }
   };

   handleChange = e => {
      e.preventDefault();

      this.setState({
         companies: {
            ...this.state.companies,
            [e.target.name]: e.target.type
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()

      this.props.companysignup(this.state.companies)
      .then(res => (res === false) ? null : this.props.history.push("https://droom-api.herokuapp.com/api/companies")      
      );
   };

   render() {

      return (
         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.signUpError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Company Sign Up</p>

                  <div class="form-group">
                     <label for="inputCompany">Company Name</label>
                     {/* <!-- Company name --> */}
                     <input 
                     type="companyName" 
                     name="companyName" 
                     id="defaultRegisterFormFirstName" 
                     value={this.state.companies.companyName} 
                     onChange={this.handleChange} 
                     class="form-control" 
                     placeholder="Company name"
                     />
                  </div>

                  <div class="form-group">
                     <label for="inputCountry">Country</label>
                     {/* <!-- Country --> */}
                     <input 
                     type="country" 
                     name="country" 
                     id="defaultRegisterFormLastName" 
                     value={this.state.companies.country} 
                     onChange={this.handleChange} 
                     class="form-control" 
                     placeholder="Country"
                     />
                  </div>
                     
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        {/* <!-- City --> */}
                        <input 
                        type="city" 
                        name="city" 
                        id="defaultRegisterFormLastName" 
                        value={this.state.companies.city} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="City"
                        />
                     </div>

                     <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        {/* <!-- State --> */}
                        <input 
                        type="state" 
                        name="state" 
                        id="defaultRegisterFormLastName" 
                        value={this.state.companies.state} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="State"
                        />
                     </div>

                     <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        {/* <!-- Zip Code --> */}
                        <input 
                        type="zipcode" 
                        name="zipcode" 
                        id="defaultRegisterFormLastName" 
                        value={this.state.companies.zipcode} 
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

export default connect( mapStateToProps, { companysignup })(CompanySignUp);