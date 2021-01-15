import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {/* if error has value then show alert */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
