import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from './../../Redux/actions';

import moment from 'moment';

const Add = () => {
  const [post, setPost] = useState('');

  const dispatch = useDispatch();

  const changeInputHandler = (event) => {
    setPost(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const momentDate = moment().format('D MMM YYYY HH:mm');
    const newPost = {
      post,
      idArray: Date.now().toString(),
      date: momentDate,
    };

    dispatch(createNote(newPost));
    event.target.reset();
  };

  return (
    <form className='add-note' onSubmit={handlerSubmit}>
      <div>
        <label htmlFor='title'>Add note...</label>
        <input
          className='input'
          type='text'
          id='title'
          name='title'
          onChange={changeInputHandler}
          pattern='(^.{1,300}$)'
        />
        <p className='message'>
          Exceeded allowed number of characters (300 characters)
        </p>
      </div>
    </form>
  );
};

export default Add;
