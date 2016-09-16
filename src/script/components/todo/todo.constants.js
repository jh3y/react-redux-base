import KeyMirror from 'key-mirror';

/**
  * Action constants for todos so that we don't fall into String mismatch
  * pits of doom
*/
const ACTIONS = KeyMirror({
  TODO_CREATE  : null,
  TODO_UPDATE  : null,
  TODO_DELETE  : null,
  TODO_HYDRATE : null
});

export default ACTIONS;
