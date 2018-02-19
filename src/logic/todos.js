import { ADD_ITEM, MARK_AS_COMPLETE, DELETE_ITEM } from './consts'

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const markAsComplete = id => {
  return { type: MARK_AS_COMPLETE, id: id};
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id: id};
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false
      };

      return {  
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
      const remainingItems = state.items.filter(({ id }) => id !== action.id);
      return {
        ...state, 
        items: remainingItems
      };
    case MARK_AS_COMPLETE:
      const items = state.items.map( item => {
        if(item.id === action.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      });
      return {...state, items};
    default:
      return state;
  }
};

export default reducer;
