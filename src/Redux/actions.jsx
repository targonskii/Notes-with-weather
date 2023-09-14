import { CREATE_NOTE, DELETE_NOTE } from "./actionTypes";
import { urlWeatherMinsk } from "../constants/urls";

export const createNote = (obj) => {
    return async (dispatch) => {
        try {
            const response = await fetch(urlWeatherMinsk);
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const weather = await response.json();
            dispatch({
                type: CREATE_NOTE,
                payload: { ...weather, ...obj },
            });
        } catch (error) {
            console.error("Ошибка при создании заметки:", error);
        }
    };
};

export const deleteNote = (noteId) => {
    return {
        type: DELETE_NOTE,
        payload: noteId,
    };
};
