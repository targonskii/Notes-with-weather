import { CREATE_NOTE, DELETE_NOTE } from "./actionTypes";

export const initialState = {
    notes: [],
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(
                    (note) => note.idArray !== action.payload
                ),
            };
        default:
            return state;
    }
};
