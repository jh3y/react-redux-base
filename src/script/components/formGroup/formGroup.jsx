import React, { PropTypes } from 'react';

const FormGroup = (props) => {
  return (
    <div className='form__group'>
      <label htmlFor={ props.id }>
        <span>{ props.label }</span>
      </label>
      {(() => {
        switch(props.type) {
          case 'text':
            return (
              <input
                type={ props.type }
                id={ props.id }
                onChange={ props.onChange }
                required='true'
              />
            )
          case 'textarea':
            return (
              <textarea
                id={ props.id }
                onChange={ props.onChange }
                required='true'
              />
            )
          default:
            return null
        }
      })()}
    </div>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormGroup;
