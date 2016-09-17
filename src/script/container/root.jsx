import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';


/**
  * NOTE:: Use browserHistory for deployment/prod environments
  * github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
*/
import { Router, hashHistory } from 'react-router';

const AppRoot = ({ store, routes }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory } children={ routes }/>
    </Provider>
  )
};

AppRoot.PropTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
};

export default AppRoot;
