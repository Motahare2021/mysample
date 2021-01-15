import React from "react";
const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} name={name} id={name} className="form-control">
        <option value="" />
        {options.map(option => (
          <option key={option.ID} value={option.ID}>
            {option.name}
          </option>
        ))}
        {/* if error has value then show alert */}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
