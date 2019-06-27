import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confpassword: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confpassword,
    } = this.state;
    return (
      firstname.length > 0
      && lastname.length > 0
      && username.length > 0
      && email.length > 0
      && password.length > 0
      && password === confpassword
    );
  };

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log('test');
    event.preventDefault();
    const {
      firstname, lastname, username, email, password,
    } = this.state;
    console.log({
      firstname,
      lastname,
      username,
      email,
      password,
    });
    axios.post('http://134.209.194.234/api/users', {
      firstname,
      lastname,
      username,
      email,
      password,
    }).then(res => console.log(res))
      .catch(e => console.log(e));
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confpassword,
    } = this.state;
    return (
      <div className="form_container">
        <div className="title">
          <h2>Register</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              name="firstname"
              type="firstname"
              className="inputRegister"
              checked={firstname}
              onChange={this.handleInputChange}
              placeholder="Firstname"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="lastname"
              type="lastname"
              className="inputRegister"
              checked={lastname}
              onChange={this.handleInputChange}
              placeholder="Lastname"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="username"
              type="username"
              className="inputRegister"
              checked={username}
              onChange={this.handleInputChange}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              type="email"
              className="inputRegister"
              checked={email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              type="password"
              className="inputRegister"
              checked={password}
              onChange={this.handleInputChange}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="confpassword"
              type="password"
              className="inputRegister"
              checked={confpassword}
              onChange={this.handleInputChange}
              placeholder="Confirm Password"
            />
          </FormGroup>
          <Button
            type="submit"
            value="Submit"
            className="HappyButton btnRegistrer"
          >
            Register
          </Button>
          <Button
            type="submit"
            value="Submit"
            className="HappyButton btnRegister"
          >
            <Link to="/connexion">Login</Link>
          </Button>
        </Form>
      </div>
    );
  }
}

export default Inscription;
