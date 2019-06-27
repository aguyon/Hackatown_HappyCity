import React, { Component } from 'react';
import './Inscription/style.css';
import axios from 'axios';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';

class IssueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      infos: '',
    };
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
      description, infos,
    } = this.state;
    axios.post('http://134.209.194.234/api/issues', {
      description,
      location: [97753, 38272],
      status: 'In progress',
      score: 1,
      creator: 1,
      type: {
        name: 'dsgdsgs',
      },
    })
      .then(res => console.log(res));
    // {
    //   "location": [
    //     "string"
    //   ],
    //   "status": "In progress",
    //   "score": 1,
    //   "type": {
    //     "name": "string"
    //   },
    //   "creator": "user",
    // }
    axios.post('http://134.209.194.234/api/comments', {
      creator: 'test',
      content: infos,
      media: 'photo.png',
      issues: 'string',
    });
    this.setState({
      show: true,
    });
  };

  validateForm = () => {
    const {
      description,
    } = this.state;
    return (
      description.length > 0
    );
  };

  render() {
    const {
      description,
      infos,
    } = this.state;
    return (
      <div className="form_container">
        <div className="title">
          <h2>Submit new issue</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              name="description"
              type="description"
              className="inputRegister"
              checked={description}
              onChange={this.handleInputChange}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="infos"
              type="infos"
              className="inputRegister"
              checked={infos}
              onChange={this.handleInputChange}
              placeholder="Additionnal infos"
            />
          </FormGroup>
          <Button
            type="submit"
            value="Submit"
            className="HappyButton"
            disabled={!this.validateForm()}
            onClick={this.handleOpen}
          >
            Post issue
          </Button>
        </Form>
      </div>
    );
  }
}

export default IssueForm;
