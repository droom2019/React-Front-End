import React from 'react';
import { connect } from 'react-redux';
import { companysignup } from '../actions';

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
      console.log("change")
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
               <input 
               type="companyName" 
               name="companyName" 
               value={this.state.companies.companyName} 
               onChange={this.handleChange} 
               class="form-control mb-4" 
               placeholder="Company name"
               />

               <label>Company Description</label>
               {/* <!-- Company Description --> */}
               <textarea 
               class="form-control rounded-0" 
               rows="3"
               type="companyDescription" 
               name="companyDescription" 
               value={this.state.companies.companyDescription} 
               onChange={this.handleChange} 
               placeholder="Company Description"
               />

               <div class="form-group">
                  <label>Country</label>
                  {/* <!-- Country --> */}
                  <input  
                  name="country" 
                  value={this.state.companies.country} 
                  onChange={this.handleChange} 
                  class="form-control" 
                  placeholder="Country"
                  />
                  
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label>City</label>
                        {/* <!-- City --> */}
                        <input 
                        name="city" 
                        value={this.state.companies.city} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="City"
                        />
                     </div>

                     <div class="form-group col-md-4">
                        <label>State</label>
                        {/* <!-- State --> */}
                        <input 
                        name="state" 
                        value={this.state.companies.state} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        placeholder="State"
                        />
                     </div>

                     <div class="form-group col-md-2">
                        <label>Zip</label>
                        {/* <!-- Zip Code --> */}
                        <input 
                        name="zipcode" 
                        value={this.state.companies.zipcode} 
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