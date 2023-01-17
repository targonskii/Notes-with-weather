import { CREATE_NOTE } from './types';

export const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: state.notes.concat([action.payload]) };
    default:
      return state;
  }
};
