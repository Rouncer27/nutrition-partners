import React from "react";

const FormFields = props => {
  const formTitle =
    props.lang === "en"
      ? "Let's start talking today."
      : "Commençons à parler aujourd'hui.";
  const fNameLabel = props.lang === "en" ? "First Name" : "Prénom";
  const lNameLabel = props.lang === "en" ? "Last Name" : "Nom";
  const phoneLabel = props.lang === "en" ? "Phone Number" : "Téléphone";
  const emailLabel = props.lang === "en" ? "Email" : "Courriel";
  const messageLabel = props.lang === "en" ? "Message" : "Message";
  const submitLabel = props.lang === "en" ? "Submit" : "Soumettre";
  const requiredLabel =
    props.lang === "en"
      ? "Required fields are followed by"
      : "Les champs obligatoires sont suivis par";

  return (
    <form onSubmit={props.submit}>
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
            value={props.firstname}
            onChange={props.change}
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
            value={props.lastname}
            onChange={props.change}
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
            value={props.phone}
            onChange={props.change}
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
            value={props.email}
            onChange={props.change}
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
            onChange={props.change}
            value={props.message}
          />
        </div>

        <div className="np-contactform__fields--button np-contactform__fields--container">
          <button type="submit">{submitLabel}</button>
        </div>
      </div>
    </form>
  );
};

export default FormFields;
