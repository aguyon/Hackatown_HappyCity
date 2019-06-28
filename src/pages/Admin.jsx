import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withContext from '../components/Context/withContext';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import AdminForm from '../components/Admin/AdminForm';

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
    const {
      userInfo, users, issues, solutions,
    } = this.props;
    const { profils } = this.state;
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
        <h2>
          Hello
          {' '}
          {profils}
          {' '}
          !
        </h2>
        <h3>
          Stats
        </h3>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              <b>{users.length}</b>
              {' '}
              users
            </Typography>
            <Typography color="textSecondary">
              <b>{issues.length}</b>
              {' '}
              issues
            </Typography>
            <Typography color="textSecondary">
              <b>{solutions.length}</b>
              {' '}
              solutions
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More stats (coming soon)</Button>
          </CardActions>
        </Card>
        <h3>
          Dashboard
        </h3>
        <AdminForm />
      </div>
    );
  }
}

export default withContext(Admin);
