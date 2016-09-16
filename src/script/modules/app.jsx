import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../components/header/header';
import * as TodoActions from '../components/todo/todo.actions';

/**
  * App is the component that wraps our changing view components
  *
  * At this point we can hydrate our apps store and take the opportunity to
  * demonstrate the use of Promises to show a loading spinner whilst our app
  * loads data
*/
class App extends React.Component {
  render() {
    console.info(this.props.loading);
    const classes = (this.props.loading) ? 'app app--loading' : 'app';
    return (
      <div className={ classes }>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.todos.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ TodoActions }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
