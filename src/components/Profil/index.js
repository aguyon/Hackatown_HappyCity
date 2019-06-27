import React from 'react';
import './style.css';
import withContext from '../Context/withContext';

const issuesImg = require.context('../../assets/icons/issues');

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userInfo, issuesList } = this.props;
    console.log(userInfo);
    return (
      <div>
        <h2 className="title">My Profil</h2>
        <div className="infoUser">
          <h3 className="problemes">Issues Reported</h3>
          {issuesList.map((issue, i) => (
            <div key={`issue-${i + 1}`}>
              {issue.name}
              <img
                src={issuesImg(issuesImg.keys().find(img => img.includes(
                  `${issue.name}.png`,
                )))}
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
