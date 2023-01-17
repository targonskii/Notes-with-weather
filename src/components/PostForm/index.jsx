import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post';

const PostForm = () => {
  const notes = useSelector(({ notes }) => notes.notes);

  if (!notes.length) {
    return <p>Empty list</p>;
  }
  return (
    <div className='postform'>
      {notes.map((post) => (
        <Post post={post} key={post.idArray} />
      ))}
    </div>
  );
};

export default PostForm;
