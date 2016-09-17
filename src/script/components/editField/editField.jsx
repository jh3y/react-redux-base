import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class EditField extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      IS_EDITING: false
    }
  }
  static propTypes = {
    editType: PropTypes.string.isRequired,
    displayType: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired
  }
  toggleEditMode() {
    this.setState({
      IS_EDITING: !this.state.IS_EDITING
    });
  }
  onBlur(e) {
    this.toggleEditMode();
    this.props.onBlur(e);
  }
  componentDidUpdate() {
    if (this.state.IS_EDITING)
      ReactDOM.findDOMNode(this.refs.editor).focus();
  }
  render() {
    const IS_EDITING = this.state.IS_EDITING;
    const props = this.props;
    if (IS_EDITING) {
      switch(props.editType) {
        case 'text':
          return (
            <input
              ref='editor'
              type={ props.type }
              className={ `${props.className} ${props.className}--edit` }
              defaultValue={ props.defaultValue }
              onBlur={ this.onBlur }
            />
          )
        case 'textarea':
          return (
            <textarea
              ref='editor'
              defaultValue={ props.defaultValue }
              onBlur={ this.onBlur }
              className={ `${props.className} ${props.className}--edit`}
            />
          )
        default:
          return null
      }
    } else {
      switch(props.displayType) {
        case 'h1':
          return (
            <h1
              className={ props.className }
              onClick={ this.toggleEditMode.bind(this) }
              title='Click to edit'
            >
              { props.value }
            </h1>
          );
        case 'p':
          return (
            <p
              className={ props.className }
              onClick={ this.toggleEditMode.bind(this) }
              title='Click to edit'
            >
              { props.value }
            </p>
          );
        default:
          return null;
      }
    }
  }
}

export default EditField;
