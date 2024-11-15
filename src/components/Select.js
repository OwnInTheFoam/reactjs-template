import React from "react";
import "./../styles/Select.css";
import ReactSelect, { components } from "react-select";

const Select = ({ options, value, selectedValue }) => {
  const Options = (props) => (
    <components.Option {...props} className="custom-option">
      <img src={props.data.icon} alt="logo" className="selected-logo" />
      <div className="option-title"> {props.data.label}</div>
    </components.Option>
  );

  const handleChange = (value) => {
    selectedValue(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={value.icon} alt="s-logo" className="selected-logo" />
      {children}
    </components.SingleValue>
  );

  return (
    <ReactSelect
      value={value}
      options={options}
      onChange={handleChange}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          width: "100%",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "#0a0a0a",
          borderColor: "#787878",
          borderRadius: "6px",
          color: "#fff",
          width: "100%",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "#fff",
          color: "#000",
        }),
      }}
      components={{
        Option: Options,
        SingleValue,
      }}
    />
  );
};

export default Select;
