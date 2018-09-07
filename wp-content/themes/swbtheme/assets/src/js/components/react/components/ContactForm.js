import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

import FormFields from "./contactForm/FormFields";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);
    this.emailValidationFailed = this.emailValidationFailed.bind(this);
    this.dismiss = this.dismiss.bind(this);

    this.state = {
      submitting: false,
      succsess: false,
      errors: false,
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: ""
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.submitting) return console.log("I will not!");

    this.setState(prevState => {
      return {
        submitting: !prevState.submitting
      };
    });

    const bodyFormData = new FormData();
    bodyFormData.set("first-name", this.state.firstname);
    bodyFormData.set("last-name", this.state.lastname);
    bodyFormData.set("phone", this.state.phone);
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("message", this.state.message);
    const baseURL = this.props.getBaseURL();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/422/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        console.log(res.data);
        if (res.data.status === "mail_sent") {
          this.emailWasSent(res.data.message);
        } else if (res.data.status === "validation_failed") {
          this.emailValidationFailed(res.data.message, res.data.invalidFields);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  emailWasSent(mess) {
    console.log(mess);
    this.setState(prevState => {
      return {
        submitting: !prevState.submitting,
        succsess: true,
        errors: false,
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: ""
      };
    });
  }

  emailValidationFailed(mess, fields) {
    console.log(mess);
    console.log(fields);
    this.setState(prevState => {
      return {
        submitting: !prevState.submitting,
        succsess: false,
        errors: true
      };
    });
  }

  dismiss() {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errors: false
      };
    });
  }

  render() {
    let formDisplay;
    if (!this.state.submitting && !this.state.errors && !this.state.succsess) {
      formDisplay = (
        <FormFields
          {...this.state}
          submit={this.onSubmit}
          change={this.onChange}
          lang={this.props.browserLang}
        />
      );
    } else if (
      this.state.submitting &&
      !this.state.errors &&
      !this.state.succsess
    ) {
      formDisplay = (
        <div>
          <h1>Submitting The form!</h1>
        </div>
      );
    } else if (
      !this.state.submitting &&
      this.state.succsess &&
      !this.state.errors
    ) {
      formDisplay = (
        <div>
          <h1>YES THE FORM WAS SUBMITTED!</h1>
          <button onClick={this.dismiss}>Dismiss</button>
        </div>
      );
    } else if (
      !this.state.submitting &&
      !this.state.succsess &&
      this.state.errors
    ) {
      formDisplay = (
        <div>
          <h1>You have some errors in your form!</h1>
          <button onClick={this.dismiss}>Dismiss</button>
        </div>
      );
    }

    return (
      <div className="np-contactform">
        <div className="np-contactform__wrapper">{formDisplay}</div>
      </div>
    );
  }
}

export default ContactForm;
