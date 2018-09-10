import React from "react";

const ErrorMessages = props => {
  return (
    <div className="np-formaction" onClick={props.dismiss}>
      <div className="np-formaction__wrapper">
        <div className="np-formaction__content">
          <h2>You have some errors in your form!</h2>
          {props.errorMessages.length > 0 &&
            props.errorMessages.map((err, index) => {
              const message = err.into.split(".");
              if (message[2] === "first-name")
                return (
                  <p key={index}>
                    The first name field is required. Please fill out your first
                    name and submit.
                  </p>
                );
              if (message[2] === "last-name")
                return (
                  <p key={index}>
                    The last name field is required. Please fill out your last
                    name and submit.
                  </p>
                );
              if (message[2] === "phone")
                return (
                  <p key={index}>
                    The phone number field is required. Please fill out your
                    phone number and submit.
                  </p>
                );
              if (message[2] === "email")
                return (
                  <p key={index}>
                    The email field is required. Please fill out your email and
                    submit.
                  </p>
                );
            })}
          <button onClick={props.dismiss}>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessages;
