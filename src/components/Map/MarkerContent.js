import React, { Component } from 'react';
import axios from 'axios';
import withContext from '../Context/withContext';

class MarkerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false,
    };
  }

  like = () => {
    const { issue } = this.props;
    console.log(issue);
    axios.put(`http://134.209.194.234/api/issues/${issue.id}`, { thumbUp: issue.thumbUp + 1 });
    this.setState({ voted: true });
  }

  dislike = () => {
    const { issue } = this.props;
    console.log(issue);
    axios.put(`http://134.209.194.234/api/issues/${issue.id}`, { thumbDown: issue.thumbDown + 1 });
    this.setState({ voted: true });
  }

  render() {
    const { issue, showComments } = this.props;
    const { voted } = this.state;
    return (
      <div>
        <h4>{issue.description}</h4>
        {
          !voted
            ? (
              <div>
                <button type="button" onClick={() => this.like()}>Thumb up</button>
                <span>{issue.thumbUp}</span>
                <button type="button" onClick={() => this.dislike()}>Thumb down</button>
                <span>{issue.thumbDown}</span>
              </div>
            )
            : null
        }
        <button type="button" onClick={() => showComments(true, issue)}>Comments</button>
      </div>
    );
  }
}

export default withContext(MarkerContent);
