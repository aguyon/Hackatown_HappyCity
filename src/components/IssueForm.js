import React, { Component } from 'react';
import './Inscription/style.css';
import './IssueForm.css';
import axios from 'axios';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import withContext from './Context/withContext';
import SuccessCheck from './SuccessCheck/SuccessCheck';

class IssueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      infos: '',
    };
    this.typeIssue = null;
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  getTypeIssue = (issuesList, selectedIcon) => {
    for (let i = 0; i < issuesList.length; i += 1) {
      if (issuesList[i].name === selectedIcon) {
        return issuesList[i]['@id'];
      }
    }
    return false;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      description,
    } = this.state;
    const {
      marker,
      userInfo,
      issuesList,
      selectedIcon,
    } = this.props;
    const { lat } = marker.position;
    const { lng } = marker.position.lng;
    axios.post('http://134.209.194.234/api/issues', {
      location: [
        lat, lng,
      ],
      status: 'Processing',
      score: 1,
      type: this.getTypeIssue(issuesList, selectedIcon),
      creator: userInfo['@id'],
      comments: [],
      description,
    })
      .then(res => console.log(`res${res}`))
      .catch(e => console.log(`err${e}`));
    //  .then(getIssues());
    // .then(res => axios.post('http://134.209.194.234/api/comments', {
    //   creator: '/api/users/12',
    //   content: 'BONJOUR',
    //   media: '',
    //   issues: '/api/issues/21',
    // })),
    this.setState({
    });
  }

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
      <div className="HappyForm">
        <div className="title">
          <h2>Submit new issue</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="HappyFormGroup">
            <Input
              name="description"
              type="description"
              className="HappyInput"
              checked={description}
              onChange={this.handleInputChange}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup className="HappyFormGroup">
            <Input
              name="infos"
              type="infos"
              className="HappyInput"
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
            onClick={<SuccessCheck />}
          >
            Post issue
          </Button>
        </Form>
      </div>
    );
  }
}

export default withContext(IssueForm);
