import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTodos } from '../../service/todo.service';
import * as TodoActions from '../../actions/todo.actions';


/**
  * Root is the component that wraps our changing view components
  *
  * At this point we can hydrate our apps store and take the opportunity to
  * demonstrate the use of Promises to show a loading spinner whilst our app
  * loads data
*/
class Root extends React.Component {
  componentDidMount() {
    getTodos()
      .then((data) => {
        this.props.hydrateTodos(data);
      });
  }
  render() {
    const props = this.props;
    if (props.hydrated) {
      return (
        <div className='app'>
          { this.props.children }
        </div>
      )
    } else {
      return (
        <div className='app app--loading'></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    hydrated: state.todos.hydrated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TodoActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
