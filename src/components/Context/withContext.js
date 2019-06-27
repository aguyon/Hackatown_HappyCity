import React from 'react';
import { Context } from './ContextProvider';

const withContext = OutComponent => props => (
  <Context.Consumer>
    {value => <OutComponent {...props} {...value} />}
  </Context.Consumer>
);

export default withContext;
