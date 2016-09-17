import React, { PropTypes } from 'react';

/**
  * A simple shell layout to show how to render layout components.
  *
  * A more complex layout may consist of things such as a side menu or index.
*/
const CreateLayout = (props) => {
  return (
    <div className='create'>
      <header>
        <h2 className='create__title'>
          Create a Todo
        </h2>
      </header>
      { props.children }
    </div>
  );
}

CreateLayout.propTypes = {
  children: PropTypes.element
};

export default CreateLayout;
