const ADD_ALERT = 'TODO/ALERT/ADD';
const RESET_ALERT = 'TODO/ALERT/RESET';

export const addAlert = (payload) => ({
  type: ADD_ALERT,
  payload,
});

export const resetAlert = () => ({
  type: RESET_ALERT,
});

export const alertReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_ALERT:
      return action.payload;
    case RESET_ALERT:
      return '';
    default:
      return state;
  }
};
