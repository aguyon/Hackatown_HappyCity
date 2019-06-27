import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

import AccountBox from '@material-ui/icons/AccountBox';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';

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
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstname, lastname, username, email, password,
    } = this.state;
    axios.post('http://134.209.194.234/api/users', {
      firstname,
      lastname,
      username,
      email,
      password,
    });
    this.setState({
      show: true,
    });
  };

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

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confpassword,
      show,
    } = this.state;
    return (
      <div className="form_wrapper">
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
            <FormGroup>
              <Button
                type="submit"
                value="Submit"
                className="Button"
                disabled={!this.validateForm()}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
          <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
            <Modal.Header closeButton />
            <Modal.Body id="modalBody">
              <div>
                <h4>
                A user was submitted:
                  {username}
                </h4>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Inscription;
