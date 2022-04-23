const ADD_ITEM = 'TODO/ITEM/ADD';
const DISPLAY_ITEM = 'TODO/ITEM/DISPLAY';
export const addItem = () => ({
  type: ADD_ITEM,
});
export const displayItem = () => ({
  type: DISPLAY_ITEM,
});

export const itemReducer = (state = 'display', action) => {
  switch (action.type) {
    case DISPLAY_ITEM:
      return 'display';
    case ADD_ITEM:
      return 'add';
    default:
      return state;
  }
};
