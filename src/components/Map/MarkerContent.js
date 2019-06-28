import React, { Component } from 'react';
import axios from 'axios';
import withContext from '../Context/withContext';
import './MarkerContent.css';
import PlusIcon from '../../assets/icons/plus-orange.png';

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
              <div className="VotePlusContainer">
                <p className="VotePlus">
                  <span className="VoteNumber">{issue.thumbUp}</span>
                  &nbsp;&nbsp;votes
                </p>
                <div className="VotePlus">
                  <button type="button" onClick={() => this.like()} className="VoteButton">
                    <img src={PlusIcon} alt="" className="PlusIcon" />
                    <p>&nbsp;&nbsp;vote</p>
                  </button>
                </div>
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
