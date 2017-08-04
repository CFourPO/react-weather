import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './Day.css';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Day = (props) => {
  let day = DAYS[props.dayOfWeek];
  return (
    <div className="day">
        <Col xs={6}>
            <h3 onClick={() => props.getHourlyForecast(props.details.time)}>{day}</h3>
            <p>{props.summary}</p>
            <p>{props.maxTemp.temp}</p>
            <p>{props.rain ? 'RAIN' : 'Dry'}</p>
        </Col>
    </div>
    )
}

export default Day;