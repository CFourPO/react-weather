import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Day from './Day/Day';
import SearchForm from './Form/Form';
import {Button, Col, Grid, Row} from 'react-bootstrap';


const DailyList = (props) => {
  return (
      <div>
        {props.daily.map((day, i) => <Day key={i} {...day} getHourlyForecast={props.getHourlyForecast}/> )}
      </div>
    )
}

class App extends Component {
  state = {
    response: [],
    hourly: [],
    daily: [],
    lat: '',
    lng: '',
    hourlyForecast: []
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

  addDays = response => {
    console.log(response);
    this.setState({
      daily: response.data.dayDetails,
      lat: response.data.lat,
      lng: response.data.lng
    });
  }

  getHourlyForecast = time => {
    axios.post('http://localhost:3000/hourly', {
      lat: this.state.lat,
      lng: this.state.lng,
      time: time
    }).then(response => {
      this.setState({
        hourlyForecast: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
            <SearchForm onSubmit={this.addDays} />
          </Row>
          <Row>
            <DailyList daily={this.state.daily} 
                       getHourlyForecast={this.getHourlyForecast}/>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
