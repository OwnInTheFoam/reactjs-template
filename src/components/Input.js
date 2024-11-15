import React from "react";
import "../styles/Input.css";

const Input = ({ label, amount, ...props }) => {
  return (
    <div>
      <div className="label-wrapper">
        <label className="input-label">{label}</label>
        {amount && (
          <div className="helper-text">
            Available amount:<span> {amount}</span> BTC
          </div>
        )}
      </div>
      <input {...props} className="input" />
    </div>
  );
};

export default Input;
