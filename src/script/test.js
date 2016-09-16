import React from 'react';

import { connect } from 'react-redux';

class Test extends React.Component {
  render() {
    return (
      <h1>Hey there</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  };
}



export default connect(
  mapStateToProps
)(Test);
