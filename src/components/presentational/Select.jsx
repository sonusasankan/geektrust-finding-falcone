import React from "react";
import PropTypes from "prop-types";

const Select = ({options, onChange, value, name, speed}) => {
  return(
    <div className="ff-select">
    <select speed={speed} name={name} value={value} onChange={onChange}>
      {options.map(option => {
          return(
            <option value={option}>{option}</option>
          )
      })}  
    </select>
  </div>
  )
};

export default Select;
