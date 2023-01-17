import { CREATE_NOTE } from './types';
import { urlWeatherMinsk } from '../constants/urls';

export const createNote = (obj) => {
  return async (dispatch) => {
    await fetch(urlWeatherMinsk)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((weather) => {
        dispatch({ type: CREATE_NOTE, payload: { ...weather, ...obj } });
      })
      .catch((err) => console.log(err.message));
  };
};
