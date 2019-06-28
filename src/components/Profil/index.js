import React from 'react';
import './style.css';
import withContext from '../Context/withContext';
import axios from 'axios';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <h2 className="title">My Profil</h2>
        <h3 className="email">Informations</h3>
        <p className="info">
          Username :
          {' '}
          {userInfo ? userInfo.username : null}
        </p>
        <p className="info">
          Email :
          {' '}
          {userInfo ? userInfo.email : null}
        </p>
        <div className="infoUser">
          <h3 className="problemes">Issues Reported</h3>
          {userInfo.issues.map((issue, i) => (
            <div key={`issue-${i + 1}`} className="encartIssues">
              <h4 className="infoIssuesName">{issue.type.name}</h4>
              <img
                src={`./assets/${issue.type.name}.png`}
                className="issuesImg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withContext(Profil);
