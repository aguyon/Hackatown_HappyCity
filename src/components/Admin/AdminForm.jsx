import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Form, Label,
} from 'reactstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import withContext from '../Context/withContext';

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '',
      title: '',
      description: '',
      status: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      issue, title, description, status,
    } = this.state;
    axios.post('http://134.209.194.234/solutions', {
      issue,
      title,
      description,
      status,
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
      title, description,
    } = this.state;
    return title.length > 0
      && description.length > 0;
  }

  render() {
    const { solutions } = this.props;
    const {
      errmsg, issue, status,
    } = this.state;
    return (
      <div className="wholeform">
        <h5>Add your solution to an issue</h5>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Select an issue</Label>
            <Input
              name="issu"
              type="select"
              className="inputSelect"
              onChange={this.handleInputChange}
              placeholder="Select issue"
              value={issue}
            >
              <option value="1">lol</option>
              <option value="type">Le Maire</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              name="title"
              type="test"
              className="inputLogin"
              onChange={this.handleInputChange}
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="content"
              className="inputQuestion"
              onChange={this.handleInputChange}
              placeholder="Your description"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="status"
              type="select"
              className="inputSelect"
              onChange={this.handleInputChange}
              placeholder="Select status"
              value={status}
            >
              <option value="done">Done</option>
              <option value="progress">In Progress</option>
              <option value="debate">Debate</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button block type="submit" value="Submit" className="HappyButton">
              <div>Post solution</div>
            </Button>
            {errmsg}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default withContext(AdminForm);
