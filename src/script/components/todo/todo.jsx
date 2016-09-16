import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

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
    }
  }
  componentDidUpdate() {
    if (this.state.editingTitle)
      ReactDOM.findDOMNode(this.refs.EditTitle).focus();
    if (this.state.editingDescription)
      ReactDOM.findDOMNode(this.refs.EditDescription).focus();
  }
  toggleEditMode(e) {
    if (e && e.target === this.refs.Title) {
      this.setState({
        editingTitle: true
      });
    } else if (e && e.target === this.refs.Description) {
      this.setState({
        editingDescription: true
      })
    } else {
      this.setState({
        editingTitle: false,
        editingDescription: false
      });
    }
  }
  update(e) {
    this.toggleEditMode();
    const todoModel = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description
    };
    if (e.target === this.refs.EditTitle)
      todoModel.title = e.target.value;
    if (e.target === this.refs.EditDescription)
      todoModel.description = e.target.value;
    this.props.onUpdate(todoModel);
  }
  render() {
    const model = this.props;
    return(
      <div className='todo' id={ model.id }>
        <header className='todo__header'>
        { this.state.editingTitle ?
          <input type='text' className='todo__title-edit' ref='EditTitle' defaultValue={ model.title } onBlur={ this.update.bind(this) }/>
        :
          <h1 className='todo__title' ref='Title' onClick={ this.toggleEditMode.bind(this) }>
          { model.title }
          </h1>
        }
          <button className='todo__delete' onClick={ this.props.onDelete } title='Delete todo'>
            &times;
          </button>
        </header>
        { this.state.editingDescription ?
          <textarea defaultValue={ model.description } ref='EditDescription' onBlur={ this.update.bind(this) } className='todo__description-edit'/>
        :
          <p className='todo__description' ref='Description' title='Click to edit' onClick={ this.toggleEditMode.bind(this) }>
            { model.description }
          </p>
        }
      </div>
    );
  }
}

/**
  * Ensure that certain props are in place.
*/
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Todo;
