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
    let commentator = '';
    if (!userInfo) {
      commentator = '39';
    } else {
      commentator = userInfo.id;
    }

    axios.post('http://134.209.194.234/api/comments', {
      commentator: `/api/users/${commentator}`,
      // commentator: `/api/users/39`,
      content: text,
      issues: `/api/issues/${showCommentsIssue.id}`,
    })
      .then(res => console.log(res));
  }

  onFileChange = (e) => {
    const { showCommentsIssue, userInfo } = this.props;

    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    axios.post('http://134.209.194.234/api/media_objects', formData)
      .then((res) => {
        // get /api/comments?user=id&issue=id => comment
        console.log(res.data)
        axios.get(`http://134.209.194.234/api/comments?commentator=${userInfo.id}&issues=${showCommentsIssue.id}`)
          .then((r) => {
            // put /api/comments/:commentId, {media: res.data.contentUrl}
            console.log(r);
            axios.put(`http://134.209.194.234/api/comments/${r.data.id}`, {
              media: res.data.contentUrl,
            })
              .then(response => console.log(response));
          });
      });
    // axios.post('http://134.209.194.234/api/comments', {
    //   commentator: `/api/users/${commentator}`,
    //   // commentator: `/api/users/39`,
    //   content: `http://134.209.194.234/${res.data.contentUrl}`,
    //   issues: `/api/issues/${showCommentsIssue.id}`,
    // })
    //   .then(res => console.log(res));
  }

  close() {
    const { showComments } = this.props;
    showComments(false);
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
        <button className="buttttttton" onClick={() => this.close()} type="button">X</button>
        <button type="button" className="HappyButton" onClick={this.onSubmit}>
          Post comment
        </button>
        {/* Post photo */}
        <input className="HappyButton" type="file" name="file" onChange={this.onFileChange} />
        {
          showCommentsIssue.comments.map((comment, i) => (
            <div className="Comment">
              <p>{comment.commentator.username}</p>
              <p>{comment.content}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default withContext(Comments);
