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
    const todoModel = {
      id: 'todo-test',
      title: 'test-title',
      description: 'test-description'
    };
    const todoRenderer = ReactTestUtils.createRenderer();
    todoRenderer.render(<Todo id={ todoModel.id } title={ todoModel.title} description={ todoModel.description }/>);
    const testTodo = todoRenderer.getRenderOutput();
    expect(testTodo.props.className).to.equal('todo');
    expect(testTodo.props.id).to.equal('todo-test');
  });
});
