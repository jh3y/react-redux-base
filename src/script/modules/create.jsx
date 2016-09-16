import React from 'react';
import { hashHistory, Link } from 'react-router';
import TodoActions from '../components/todo/todo.actions';

import '../../style/button.styl';
import '../../style/form.styl';


/**
  * Creation form for our todo app.
  *
  * A basic form with simple "required" validation. On submit, we dispatch
  * an action to update our todo store with the newly created todo.
*/
class Create extends React.Component {
  constructor(props) {
    super(props);
    /**
      * This trick enables us to access the submit event whilst still being
      * bound to the component instance.
    */
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    TodoActions.create({
      title: this.refs.TodoTitle.value,
      description: this.refs.TodoDescription.value
    });
    hashHistory.push('/');
  }
  render() {
    return (
      <form className="create-form form" onSubmit={ this.onSubmit }>
        <div>
          <div className='form__group'>
            <label htmlFor='create_title'>
              <span>Title</span>
            </label>
            <input type='text' id='create__title' ref='TodoTitle' required='true'/>
          </div>
        </div>
        <div>
          <div className='form__group'>
            <label htmlFor='create_description'>
              <span>Description</span>
            </label>
            <textarea type='text' id='create_description' ref='TodoDescription' required='true'/>
          </div>
        </div>
        <div>
          <Link to='#/' className='btn btn--alt'>
            Cancel
          </Link>
          <input type='submit' className='btn' value='Create'/>
        </div>
      </form>
    );
  }
}

export default Create;
