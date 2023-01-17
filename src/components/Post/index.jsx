import React from 'react';

import Weather from '../Weather';
import Button from '../Button';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className='textpost'>{post.post}</div>
      <Button className='close' text='+' />
      <Weather post={post} />
    </div>
  );
};

export default Post;
