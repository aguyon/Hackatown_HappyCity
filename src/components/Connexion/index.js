import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Form,
} from 'reactstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './style.css';

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
      errmsg: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    axios.get(`http://134.209.194.234/api/users?username=${username}`).then((res) => {
      if (
        res.data['hydra:member'][0].username === username
        && res.data['hydra:member'][0].password === password
      ) {
        this.setState({ redirect: true });
      } else {
        this.setState({ errmsg: 'Username or password invalid' });
      }
    });
  };

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  };

  render() {
    const {
      username, password, redirect, errmsg,
    } = this.state;
    if (redirect) return <Redirect to="/map" />;
    return (
      <div className="wholeform">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlid="username">
            <Input
              name="username"
              autoFocus
              type="username"
              className="inputLogin"
              checked={username}
              onChange={this.handleInputChange}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup controlid="password">
            <Input
              name="password"
              className="inputLogin"
              checked={password}
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
              value="Submit"
              className="HappyButton"
            >
              {redirect ? <Link to="/map">Login</Link> : null}
            </Button>
          </FormGroup>
          <FormGroup>
            <Button block type="submit" value="Submit" className="HappyButton">
              <Link to="/inscription">Register</Link>
            </Button>
            {errmsg}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Connexion;
