import React, { Component } from 'react';
import '../App.css';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="demo">
          <p>
          Make your city happy !You want to be an actor of your city’s decision ?
            <hr />
          Share your ideas, show and report problems you see around !
          </p>
        </div>
      </div>
    );
  }
}

export default Demo;
