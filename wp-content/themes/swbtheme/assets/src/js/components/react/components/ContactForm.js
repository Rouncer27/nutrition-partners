import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

import FormFields from "./contactForm/FormFields";
import FormSubmitting from "./contactForm/FormSubmitting";
import FormSuccess from "./contactForm/FormSuccess";
import ErrorMessages from "./contactForm/ErrorMessages";

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
      errorMessages: [],
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
    bodyFormData.append("first-name", this.state.firstname);
    bodyFormData.append("last-name", this.state.lastname);
    bodyFormData.append("phone", this.state.phone);
    bodyFormData.append("email", this.state.email);
    bodyFormData.append("message", this.state.message);
    const baseURL = this.props.getBaseURL();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/422/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
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
    this.setState(prevState => {
      return {
        submitting: !prevState.submitting,
        succsess: false,
        errors: true,
        errorMessages: fields
      };
    });
  }

  dismiss() {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errors: false,
        errorMessages: []
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
      formDisplay = <FormSubmitting />;
    } else if (
      !this.state.submitting &&
      this.state.succsess &&
      !this.state.errors
    ) {
      formDisplay = <FormSuccess dismiss={this.dismiss} />;
    } else if (
      !this.state.submitting &&
      !this.state.succsess &&
      this.state.errors
    ) {
      formDisplay = (
        <ErrorMessages
          errorMessages={this.state.errorMessages}
          dismiss={this.dismiss}
        />
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
