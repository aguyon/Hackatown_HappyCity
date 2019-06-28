import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import withContext from '../components/Context/withContext';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import ProfilButton from '../components/ProfilButton/ProfilButton';

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
        <h2>Admin</h2>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Les stats de ma ville
            </Typography>
            <Typography color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withContext(Admin);
