import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './Day.css';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Day = (props) => {
  let day = DAYS[props.dayOfWeek];
  return (
    <div className="day">
        <Col xs={12} md={1}>
            <h4 onClick={() => props.getHourlyForecast(props.time)}>{day}</h4>
            <p>{props.maxTemp.temp}</p>
            <p>{props.rain ? 'RAIN' : 'Dry'}</p>
        </Col>
    </div>
    )
}

export default Day;