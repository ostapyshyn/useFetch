import React from 'react';
import useFetch from '../hooks/useAxios';
import Button from '@mui/material/Button';

function DeleteButton() {
  const [, doFetch] = useFetch('https://jsonplaceholder.typicode.com/users/1');

  function deleteRequest() {
    doFetch({
      method: 'delete',
    });
  }

  return <Button onClick={deleteRequest}>Delete</Button>;
}

export default DeleteButton;
