import React, { Component } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import FilterButton from '../components/FilterButton/FilterButton';
import withContext from '../components/Context/withContext';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <FilterButton />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default withContext(Contact);
