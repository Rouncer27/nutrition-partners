import React from "react";

const FormSuccess = props => {
  return (
    <div className="np-formaction" onClick={props.dismiss}>
      <div className="np-formaction__wrapper">
        <div className="np-formaction__content">
          <h2>Thank you</h2>
          <p>The form has been submitted. we will be in touch soon.</p>
          <button onClick={props.dismiss}>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
