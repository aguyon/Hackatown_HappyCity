import React, { Component } from 'react';

class IssueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>je suis un formulaire</p>
        <form>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default IssueForm;
