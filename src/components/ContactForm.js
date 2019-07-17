import React, { Component } from 'react';
import './ContactForm.scss';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      sent:false,
      confirmationText: "No",
      buttonText:'Send',
      errorMessage:'',
      buttonStyle:"#DE5B49",
      errors:{
        email:'',
        name:'',
        message:''
      }
    }
  }

  validateForm(){
    let errors = {}
    let formIsValid = true

    if(!this.state.name){
      errors.name = "Name is required"
      formIsValid = false
    }
    if(!this.state.message){
      errors.message = "Message is required"
      formIsValid = false
    }
    if(!this.state.email){
      errors.email = "Email is required"
      formIsValid = false
    }
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!pattern.test(this.state.email)){
      errors.email = "This is not a valid email address"
      formIsValid = false
    }
    this.setState({errors:errors})
    return formIsValid
  }

sentMessage(event){
  event.preventDefault()
  if(!this.validateForm()){
    return
  }

  var template_params = {
    "name": this.state.name,
    "email": this.state.email,
    "message":this.state.message
  }

  var service_id = "default_service";
  var template_id = "inquiry";
  var user_id = "user_sduVT1pDDMNBvR9sjMzYC";

  emailjs.send(service_id, template_id, template_params, user_id)
  .then(
    function(response){
      console.log("Success!")
      this.setState({buttonText:"Sent!",email:'',name:'',message:'',buttonStyle:"#46B29D"})
    }.bind(this),
  )
  .catch(
    function(err){
      console.log(err)
      this.setState({errorMessage:"Our message system seems to be down. Please try again later. We apologize for the inconvience."})
    }.bind(this)
  )



}


  render() {
    return (
      <div className="contact-form">
        <h2>Contact J&G Demolition</h2>
        <form>
          <label htmlFor="email">Email Address</label>
          <p className="input-errors">{this.state.errors.email}</p>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}

          />

          <label htmlFor="name">Name</label>
          <p className="input-errors">{this.state.errors.name}</p>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <label htmlFor="message">Inquiry</label>
          <p className="input-errors">{this.state.errors.message}</p>
          <textarea
            name="message"
            id="message"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}>
          </textarea>
        {this.state.errorMessage && <div className="error-message"><p>{this.state.errorMessage}</p></div>}

          <input
            id="submit"
            className="submit float-right"
            name="submit"
            type="submit"
            value={this.state.buttonText}
            onClick={this.sentMessage.bind(this)}
            style={{background:this.state.buttonStyle}}
          />



          <div className="clear"></div>


        </form>
      </div>
    );
  }

}

export default ContactForm;
