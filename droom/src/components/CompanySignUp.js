import React from 'react';
import { connect } from 'react-redux';
import { companysignup } from '../actions';
import jwt from "jwt-decode";

class CompanySignUp extends React.Component {
   state = {
      userId: jwt(localStorage.getItem("token")).subject,
      company: {
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
         company: {
            ...this.state.company,
            [e.target.name]: e.target.value
         }
      });
   };

   handleSubmit = e => {
      e.preventDefault()
      this.props.companysignup(this.state)
      .then(res => (res === false) ? null : this.props.history.push("/companyprofile")      
      );
   };

   render() {

      return (
         <div className="registerContainer">
            {/* <!-- Default form register --> */}
            <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
               {this.props.signUpError && <p>Error on sign up, try again</p>}
               
               <p class="h4 mb-4">Company Sign Up</p>

               <label>Company Name</label>
               {/* <!-- Company name --> */}
               <input type="text"
               name="companyName" 
               value={this.state.company.companyName} 
               onChange={this.handleChange} 
               class="form-control mb-4" 
               placeholder="Company name"
               />

               <label>Company Description</label>
               {/* <!-- Company Description --> */}
               <textarea 
               class="form-control rounded-0" 
               rows="3"
               type="text"
               name="companyDescription" 
               value={this.state.company.companyDescription} 
               onChange={this.handleChange} 
               placeholder="Company Description"
               />

               <div class="form-group">
                  <label>Country</label>
                  {/* <!-- Country --> */}
                  <input  
                  type="text"
                  name="country" 
                  value={this.state.company.country} 
                  onChange={this.handleChange} 
                  class="form-control" 
                  placeholder="Country"
                  />
                  
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label>City</label>
                        {/* <!-- City --> */}
                        <input 
                        type="text"
                        name="city" 
                        value={this.state.company.city} 
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
                        value={this.state.company.state} 
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
                        value={this.state.company.zipcode} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="Zip code"
                        />
                     </div>
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