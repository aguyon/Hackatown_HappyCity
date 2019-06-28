import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Form, Label,
} from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* username: '',
      password: '',
      redirect: false,
      errmsg: '',
    */};
  }

  /* handleSubmit = (event) => {
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
  }; */

  render() {
    const {
      username, redirect, errmsg,
    } = this.state;
    if (redirect) return <Redirect to="/map" />;
    return (
      <div className="wholeform">
        <h2>Nous contacter</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Ma question concerne</Label>
            <Input
              name="select"
              type="select"
              className="inputSelect"
              placeholder="Select "
            >
              <option>HappyTown</option>
              <option>Le Maire</option>
            </Input>
          </FormGroup>
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
          <FormGroup>
            <Input
              name="select"
              type="select"
              className="inputSelect"
              placeholder="Select "
            >
              <option>J’ai trouvé un défaut dans l’application</option>
              <option>Proposition</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="text"
              className="inputQuestion"
              placeholder="Votre question"
            />
          </FormGroup>
          <FormGroup>
            <Button block type="submit" value="Submit" className="HappyButton">
              <div>Send</div>
            </Button>
            {errmsg}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
