import React, { Component } from 'react';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import withContext from '../components/Context/withContext';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('user')) {
      const { userInfo } = this.props;
      const userString = JSON.stringify(userInfo.username);
      localStorage.setItem('user', userString);
    }
    const { profils } = this.state;
    profils.push(JSON.parse(localStorage.getItem('user')));
    this.setState({ profils });
  }

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <div>
          <BurgerButton />
          {
            userInfo && userInfo.role === 'admin' ? (
              null
            ) : <ProfilButton />
          }
        </div>
        <div>
          Admin
        </div>
      </div>
    );
  }
}

export default withContext(Admin);
