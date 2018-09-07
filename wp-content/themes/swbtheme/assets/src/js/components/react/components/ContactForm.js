import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);

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
        if (res.data.status === "mail_sent") {
          this.emailWasSent();
          this.setState(prevState => {
            return {
              firstname: "",
              lastname: "",
              phone: "",
              email: "",
              message: ""
            };
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  emailWasSent() {
    console.log("Yes sir!");
  }

  render() {
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
              <div className="np-contactform__fields--fname np-contactform__fields--container">
                <label htmlFor="firstname">
                  {fNameLabel}
                  &#42;
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder={fNameLabel}
                  value={this.state.firstname}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--lname np-contactform__fields--container">
                <label htmlFor="lastname">
                  {lNameLabel}
                  &#42;
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder={lNameLabel}
                  value={this.state.lastname}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--phone np-contactform__fields--container">
                <label htmlFor="phone">
                  {phoneLabel}
                  &#42;
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder={phoneLabel}
                  value={this.state.phone}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--email np-contactform__fields--container">
                <label htmlFor="email">
                  {emailLabel}
                  &#42;
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={emailLabel}
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="np-contactform__fields--message np-contactform__fields--container">
                <label htmlFor="message">{messageLabel}</label>
                <textarea
                  cols="40"
                  rows="8"
                  name="message"
                  id="message"
                  onChange={this.onChange}
                  value={this.state.message}
                />
              </div>

              <div className="np-contactform__fields--button np-contactform__fields--container">
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
