import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Resp = (props) => {
  return (
    <p>{props.currently}</p>
  )
}

const Hour = (props) => {
  let myHourTime = props.hourTime.getHours();
  let ampm = (myHourTime >= 12) ? 'PM' : 'AM';

  return (
    <div>
      <h3>{'' + (myHourTime != 12 ? myHourTime % 12 : 12) + ':00' + ampm}</h3>
      <p>{props.summary}</p>

      <p><b>Apparent Temperature: </b>{props.apparentTemperature}</p>
      <p><b>Cloud Cover: </b>{props.cloudCover}</p>
    </div>
    )
}

const HourlyList = (props) => {
  return (
      <div>
        {props.hourly.map((hour, i) => <Hour hourTime={new Date(hour.time * 1000)} key={i} {...hour} /> )}
      </div>
    )
}

class App extends Component {
  state = {
    response: {},
    hourly: []
  }

  submitRequest = () => {
    axios.get('/darksky')
      .then(response => {
        this.setState({
          response: response.data,
          hourly: response.data.hourly.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <HourlyList hourly={this.state.hourly} />
        <button onClick={this.submitRequest}>Go!</button>
      </div>
    );
  }
}

export default App;
