import React, { PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';

import FormGroup from 'components/formGroup/formGroup';

import 'button.styl';
import 'form.styl';


/**
  * Creation form for our todo app.
  *
  * A basic form with simple "required" validation. On submit, we dispatch
  * an action to update our todo store with the newly created todo.
*/

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined
    };
    /**
      * This trick enables us to access the submit event whilst still being
      * bound to the component instance.
    */
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const targetId = e.target.id;
    const val = e.target.value;
    const state = this.state;
    this.setState({
      title: (targetId === 'create_title') ? val : state.title,
      description: (targetId === 'create_description') ? val : state.description
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    hashHistory.push('/');
  }
  render() {
    return (
      <form className="create-form form" onSubmit={ this.onSubmit }>
        <div>
          <FormGroup
            id='create_title'
            type='text'
            label='Title'
            onChange={ this.onChange }
          />
        </div>
        <div>
          <FormGroup
            id='create_description'
            type='textarea'
            label='Description'
            onChange={ this.onChange }
          />
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
};

Create.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Create;
