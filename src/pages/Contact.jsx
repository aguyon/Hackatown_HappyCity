import React, { Component } from 'react';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import ContactForm from '../components/Contact/ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <BurgerButton />
          <ProfilButton />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
