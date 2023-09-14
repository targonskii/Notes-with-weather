import { combineReducers } from "redux";
import { CREATE_NOTE } from "./actionTypes";

export const notesReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    notes: notesReducer,
});
