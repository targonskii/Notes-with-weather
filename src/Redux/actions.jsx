import { CREATE_NOTE } from "./actionTypes";
import { urlWeatherMinsk } from "../constants/weatherUrl";

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
