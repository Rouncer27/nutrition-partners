import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
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
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    const formTitle =
      this.props.browserLang === "en"
        ? "Let's start talking today."
        : "Commençons à parler aujourd'hui.";
    const fNameLabel =
      this.props.browserLang === "en" ? "First Name" : "Prénom";
    const lNameLabel =
      this.props.browserLang === "en" ? "Last Name" : "Nom de famille";
    const phoneLabel =
      this.props.browserLang === "en" ? "Phone Number" : "Numéro de téléphone";
    const emailLabel =
      this.props.browserLang === "en" ? "Email Address" : "Adresse e-mail";
    const messageLabel =
      this.props.browserLang === "en" ? "Message" : "Message";
    const submitLabel =
      this.props.browserLang === "en" ? "Submit" : "Soumettre";
    const requiredLabel =
      this.props.browserLang === "en"
        ? "Required fields are followed by"
        : "Les champs obligatoires sont suivis par";

    return (
      <div className="np-contactform">
        <div className="np-contactform__wrapper">
          <form onSubmit={this.onSubmit}>
            <div className="np-contactform__title">
              <h2>{formTitle}</h2>
              <p className="np-contactform__title--required">
                {requiredLabel}{" "}
                <strong>
                  <abbr title="required">&#42;</abbr>
                </strong>
              </p>
            </div>
            <div className="np-contactform__fields">
              <div className="np-contactform__fields--fname">
                <label htmlFor="firstname">{fNameLabel}</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder={fNameLabel}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--lname">
                <label htmlFor="lastname">{lNameLabel}</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder={lNameLabel}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--phone">
                <label htmlFor="phone">{phoneLabel}</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder={phoneLabel}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--email">
                <label htmlFor="email">{emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={emailLabel}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--message">
                <label htmlFor="message">{messageLabel}</label>
                <textarea
                  cols="40"
                  rows="8"
                  name="message"
                  id="message"
                  onChange={this.onChange}
                />
              </div>

              <div className="np-contactform__fields--button">
                <button type="submit">{submitLabel}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
