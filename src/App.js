import React, { Component } from "react";
import "./App.css";

import FormContainer from "./components/container/FormContainer";
import Select from "./components/presentational/Select"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      selected: [],
      selects: {
        select1: {
          value: 'Select a planet',
        },
        select0: {
          value: 'Select a planet',
        },
        select2: {
          value: 'Select a planet',
        },
        select3: {
          value: 'Select a planet',
        },
        select4: {
          value: 'Select a planet',

        },
        select5: {
          value: 'Select a planet',
        },
      },
      current: '',
      selectedVehicles: [],
      vehicle: ''
    }

    this.addPlanets = this.addPlanets.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._selectVehicle = this._selectVehicle.bind(this);
    // this._renderSelect = this._renderSelect.bind(this)

  }

  //fetching planets//
  componentDidMount() {
    Promise.all([
      fetch('https://findfalcone.herokuapp.com/planets'),
      fetch('https://findfalcone.herokuapp.com/vehicles')
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
        planets: data1,
        vehicles: data2
      }));
  }

  addPlanets(e) {
    // let distance = 100
    let obj = this.state.planets.find(el => {
      return el.name === e.target.value
    })
    console.log(filtered)
    this.setState((state, props) => ({
      selected: {
        ...state.selected,
        [name]: obj
      }
    }))
  }

  _handleChange(e) {
    let obj = this.state.planets.find(el => {
      return el.name === e.target.value
    })

    let toFilter = this.state.planets;

    let filtered = toFilter.filter(item => {
      return item.name.indexOf(e.target.value) == -1
    })

    let prevState = this.state.selects;
    if (e.target.value !== "Select a planet") {
      this.setState({
        selects: {
          ...prevState,
          [e.target.name]: {
            value: e.target.value,
            distance: obj.distance
          }
        },
        planets: filtered,
      })
    } else {
      this.setState({
        selects: {
          ...prevState,
          [e.target.name]: {
            value: e.target.value,
          }
        },
      })
    }
  }

  _selectVehicle(e, i) {
    let target = e.target;
    this.setState((prevState) => ({
      selects: {
        ...prevState.selects,
        [`select${i}`]: {
          ...prevState.selects.select0,
          vehicle: target.value,
          speed: 100
        }
      }
    }))
  }

  // _renderSelect({ planets, vehicles, selects, selectedVehicles } = this.state) {
  //   while (i < 4) {
  //     return (
  //       <Select
  //         selectedVehicles={selectedVehicles}
  //         selectVehicle={(e) => this._selectVehicle(e, index)}
  //         vehicle={this.state.vehicle}
  //         value={selects[`select${index}`].value}
  //         id={index} name={`select${index}`}
  //         options={planets} vehicles={vehicles}
  //         onChange={this._handleChange} />
  //     )
  //   }
  // }

  render() {
    const { planets, vehicles, selects, selectedVehicles } = this.state;
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
              {
                planets.map((planet, index) => {
                return (
                  index < 4 ?
                    <div className="col-md-3">
                      <Select
                        selectedVehicles={selectedVehicles}
                        selectVehicle={(e) => this._selectVehicle(e, index)}
                        vehicle={this.state.vehicle}
                        value={selects[`select${index}`].value}
                        id={index} name={`select${index}`}
                        options={planets} vehicles={vehicles}
                        onChange={this._handleChange} />
                    </div> : null
                )
              })
              
              }
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
