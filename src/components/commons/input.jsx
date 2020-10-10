import React from 'react';

const Input = ({ name, value, label, type, handleChange }) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          onChange={handleChange}
          value={value}
          type={type}
          className="form-control"
          id={name}
          placeholder={label}
        />
      </div>
    );
}
 
export default Input;