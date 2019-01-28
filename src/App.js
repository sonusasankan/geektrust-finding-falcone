import React, { Component } from "react";
import "./App.css";

import FormContainer from "./components/container/FormContainer";

class App extends Component {
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
                    <div className="ff-select">
                        <select>
                            <option value="DonLon">Donlon</option>
                            <option value="Enchai">Enchai</option>
                            <option selected value="Jebing">Jebing</option>
                            <option value="Sapir">Sapir</option>
                            <option value="Lerbin">Lerbin</option>
                            <option value="Pingasar">Pingasar</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="ff-select">
                        <select>
                            <option value="DonLon">Donlon</option>
                            <option value="Enchai">Enchai</option>
                            <option selected value="Jebing">Jebing</option>
                            <option value="Sapir">Sapir</option>
                            <option value="Lerbin">Lerbin</option>
                            <option value="Pingasar">Pingasar</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="ff-select">
                        <select>
                            <option value="DonLon">Donlon</option>
                            <option value="Enchai">Enchai</option>
                            <option selected value="Jebing">Jebing</option>
                            <option value="Sapir">Sapir</option>
                            <option value="Lerbin">Lerbin</option>
                            <option value="Pingasar">Pingasar</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="ff-select">
                        <select>
                            <option value="DonLon">Donlon</option>
                            <option value="Enchai">Enchai</option>
                            <option selected value="Jebing">Jebing</option>
                            <option value="Sapir">Sapir</option>
                            <option value="Lerbin">Lerbin</option>
                            <option value="Pingasar">Pingasar</option>
                        </select>
                    </div>
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
