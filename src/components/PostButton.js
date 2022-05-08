import React from 'react';
import useFetch from '../hooks/useAxios';
import Button from '@mui/material/Button';

function PostButton() {
  const [, doFetch] = useFetch('https://jsonplaceholder.typicode.com/users');

  function post() {
    doFetch({
      method: 'post',
      data: {
        name: 'Post Name',
        body: 'Sample text',
      },
    });
  }

  return <Button onClick={post}>POST</Button>;
}

export default PostButton;
