import React, { Component } from "react";
import "./App.css";

import FormContainer from "./components/container/FormContainer";
import Select from "./components/presentational/Select"
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        values: [],
    }

    this.addPlanets = this.addPlanets.bind(this);

  }  

  addPlanets(e){
    let obj = [{
      [e.target.name] : e.target.value,
      "speed": e.target.speed 
    }]

    this.setState((state, props)=>({
       values: obj
    }))
  }

  render() {
    return (
      <main className="main">
        <div className="gf-section">
          <div className="container">
            <div className="row-fluid text-center py-5">
              <h1 className="gf-title-main">Finding Falcone!</h1>
            </div>
            <div className="row-fluid text-center py-4">
            <h3 className="gf-title-sub">Select planets you want to search in:</h3>
            </div>
            <div className="row py-4">
                <div className="col-md-3">
                    <Select speed="100" name={`select${1}`} value={this.state.value} onChange={this.addPlanets} options={['Donlon', 'Enchai', 'Jebing', 'Sapir', 'Lerbin', 'Pingasar']}/>
                    {this.state.value != ""? <h3>radio button</h3>: ""}
                </div>

            </div>
            <div className="row-fluid text-center">
             <h4>Time taken: 4hr</h4>
             <button className="btn btn-primary">Find falcon</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
