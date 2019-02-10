import React, {Component} from "react";
import PropTypes from "prop-types";

class Select extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const { options, id, name, value, onChange, vehicles, selectVehicle} = this.props
    return (
      <div className="ff-select">
        <select name={name} value={value} onChange={onChange}>
          {options.map((option,i) => {
            return (
              i === 0? <option value='Select a planet'>Select a planet</option>:
              <option value={option.name}>{option.name}</option>
            )
          })}
        </select>
        <div className="form-check">
          
          {
            vehicles.map((vehicle , i) => {
              return (
                value != "Select a planet"?
                <React.Fragment>
                  <input onChange={selectVehicle} className="form-check-input" type="radio" name={`vehicle${id}`} id={vehicle.name.replace(/ /g,'') + id} value={vehicle.name} />
                  <label className="form-check-label" htmlFor={vehicle.name.replace(/ /g,'') + id}>
                    {vehicle.name}
                  </label><br></br>
                </React.Fragment>: null
              )
            })
          }
        </div>
      </div>
    )
  }
};

export default Select;
