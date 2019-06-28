import React from 'react';
import './style.css';
import withContext from '../Context/withContext';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    
  }

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <h2 className="title">My Profil</h2>
        <div className="infoUser">
          <h3 className="problemes">Issues Reported</h3>
          {userInfo.issues.map((issue, i) => (
            <div key={`issue-${i + 1}`}>
              <p className="infoIssues">{issue.type.name}</p>
              <p className="infoIssues">{issue.score}</p>
              <p className="infoIssues">{issue.status}</p>
              <img
                src={`./assets/${issue.type.name}.png`}
                className="issuesImg"
                alt=""
              />
            </div>
          ))}
          <h3 className="email">Informations</h3>
        </div>
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
      </div>
    );
  }
}

export default withContext(Profil);
