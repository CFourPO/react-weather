import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';
import {Button, Col} from 'react-bootstrap';
import axios from 'axios';

class SearchForm extends React.Component {
  state = {
    address: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/darksky`, {
        address: this.state.address
      })
      .then(response => {
        console.log(response);
        this.props.onSubmit(response.data.data);
      });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          
          <FormControl
                type="text"
                value={this.state.address}
                placeholder="Enter Address, City, or State"
                onChange={event => this.setState({ address: event.target.value })}/>
          
          <Button inline bsStyle="primary">Get Weather</Button>
    
        </FormGroup>
      </Form>

    );
  }
}

export default SearchForm;