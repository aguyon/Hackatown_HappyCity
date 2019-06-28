import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Form, Label,
} from 'reactstrap';
import axios from 'axios';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      content: '',
      object: '',
      to: '',
      errmsg: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email, content, object, to,
    } = this.state;
    axios.post('http://134.209.194.234/contact', {
      email,
      content,
      object,
      to,
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

  validateForm() {
    const {
      email, content,
    } = this.state;
    return content.length > 0
      && email.length > 0;
  }

  render() {
    const {
      errmsg, to, object,
    } = this.state;
    return (
      <div className="wholeform">
        <h2>Nous contacter</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Ma question concerne</Label>
            <Input
              name="to"
              type="select"
              className="inputSelect"
              onChange={this.handleInputChange}
              placeholder="Select"
              value={to}
            >
              <option value="mayor">HappyTown</option>
              <option value="type">Le Maire</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              type="mail"
              className="inputLogin"
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="object"
              type="select"
              className="inputSelect"
              onChange={this.handleInputChange}
              placeholder="Select"
              value={object}
            >
              <option value="default">J’ai trouvé un défaut dans l’application</option>
              <option value="proposition">Proposition</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="content"
              className="inputQuestion"
              onChange={this.handleInputChange}
              placeholder="Votre question"
            />
          </FormGroup>
          <FormGroup>
            <Button block type="submit" value="Submit" className="HappyButton">
              <div>Envoyer</div>
            </Button>
            {errmsg}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
