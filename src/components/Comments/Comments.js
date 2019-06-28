import React, { Component } from 'react';
import './Comments.css';
import axios from 'axios';
import withContext from '../Context/withContext';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  onSubmit = () => {
    const { text } = this.state;
    const { showCommentsIssue, userInfo } = this.props;

    axios.post('http://134.209.194.234/api/comments/', {
      // commentator: `/api/users/${userInfo.id}`,
      commentator: `/api/users/39`,
      content: text,
      issues: `/api/issues/${showCommentsIssue.id}`,
    })
      .then(res => console.log(res));
  }

  onFileChange = (e) => {
    const { showCommentsIssue, userInfo } = this.props;

    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });

    axios.post(`http://134.209.194.234/api/comments/${showCommentsIssue.id}`, formData)
      .then(res => console.log(res));
  }

  render() {
    const { showCommentsIssue } = this.props;
    const { text } = this.state;
    return (
      <div className="Comments">
        <textarea
          type="textarea"
          onChange={this.handleChange}
          value={text}
          rows={5}
          cols={33}
        />
        <button type="button" className="HappyButton" onClick={this.onSubmit}>
          Post comment
        </button>
        {/* Post photo */}
        <input className="HappyButton" type="file" onChange={this.onFileChange} />
        {
          showCommentsIssue.comments.map((comment, i) => (
            <div key={`comment-${i + 1}`}>
              coucou
            </div>
          ))
        }
      </div>
    );
  }
}

export default withContext(Comments);
