import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import EditField from 'components/editField/editField';

/* import component specific styling */
import './todo.styl';


/**
  * Todo component
  *
  * Has a toggle for editing fields. This is controlled by component state.
  * If a user clicks say the "title" we set the state to reflect this. This
  * renders a text area/input for the user to then update the field. onBlur
  * triggers the change to be dispatched to the store and updated.
*/
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTitle: false,
      editingDescription: false
    };
    this.onUpdate = this.onUpdate.bind(this);
  }
  /**
  * Ensure that certain props are in place.
  */
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  }
  componentDidUpdate() {
    if (this.state.editingTitle)
      ReactDOM.findDOMNode(this.refs.EditTitle).focus();
    if (this.state.editingDescription)
      ReactDOM.findDOMNode(this.refs.EditDescription).focus();
  }
  onUpdate(e) {
    const cl = e.target.className;
    const todoModel = {
      id: this.props.id,
      title: (cl.indexOf('todo__title') !== -1) ? e.target.value: this.props.title,
      description: (cl.indexOf('todo__description') !== -1) ? e.target.value : this.props.description
    };
    this.props.onUpdate(todoModel);
  }
  render() {
    const model = this.props;
    return(
      <div className='todo' id={ model.id }>
        <header className='todo__header'>
          <EditField
            editType= 'text'
            displayType= 'h1'
            className='todo__title'
            defaultValue={ model.title }
            value={ model.title }
            onBlur={ this.onUpdate }
          />
          <button
            className='todo__delete'
            onClick={ model.onDelete }
            title='Delete todo'
          >
            &times;
          </button>
        </header>
        <EditField
          editType= 'textarea'
          displayType= 'p'
          className='todo__description'
          defaultValue={ model.description }
          value={ model.description }
          onBlur={ this.onUpdate }
        />
      </div>
    );
  }
}

export default Todo;
