import React from 'react';
import useFetch from '../hooks/useAxios';
import Button from '@mui/material/Button';

function PatchButton() {
  const [, doFetch] = useFetch('https://jsonplaceholder.typicode.com/users/1');

  function patch() {
    doFetch({
      method: 'patch',
      data: {
        name: 'Patched title',
      },
    });
  }

  return <Button onClick={patch}>Patch</Button>;
}

export default PatchButton;
