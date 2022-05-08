import React from 'react';
import useFetch from '../hooks/useAxios';
import Button from '@mui/material/Button';

function PutButton() {
  const [, doFetch] = useFetch('https://jsonplaceholder.typicode.com/users/1');

  function put() {
    doFetch({
      method: 'put',
      data: {
        name: 'New put request rr',
        body: 'Sample text',
      },
    });
  }

  return <Button onClick={put}>Put</Button>;
}

export default PutButton;
