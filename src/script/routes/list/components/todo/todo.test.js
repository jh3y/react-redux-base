import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Todo from './todo';


/**
  * Creates a basic testing starter point.
  *
  * Shallow rendering a todo component with a basic model,
  * we can assert that the output has the correct className and id.
*/
describe('todo component', function(){
  it('renders correct element w/ attributes', function() {
    const id = 'TEST';
    const title = 'TEST';
    const description = 'TEST';
    const onUpdate = () => {};
    const onDelete = () => {};
    const todoRenderer = ReactTestUtils.createRenderer();
    todoRenderer.render(
      <Todo
        id = { id }
        title = { title}
        description = { description }
        onDelete = { onDelete }
        onUpdate = { onUpdate }
      />
    );
    const testTodo = todoRenderer.getRenderOutput();
    expect(testTodo.props.className).to.equal('todo');
    expect(testTodo.props.id).to.equal('TEST');
  });
});
