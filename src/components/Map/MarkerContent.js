import React, { Component } from 'react';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
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

  delete = () => {
    const { issue } = this.props;
    axios.delete(`http://134.209.194.234/api/issues/${issue.id}`);
  }

  dislike = () => {
    const { issue } = this.props;
    console.log(issue);
    axios.put(`http://134.209.194.234/api/issues/${issue.id}`, { thumbDown: issue.thumbDown + 1 });
    this.setState({ voted: true });
  }

  render() {
    const { issue, showComments, userInfo } = this.props;
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
        {
          userInfo && userInfo.role === 'admin' ? (
            <button onClick={() => this.delete()} className="Vert" type="button">
              Delete issue
            </button>
          ) : null
        }
      </div>
    );
  }
}

export default withContext(MarkerContent);
