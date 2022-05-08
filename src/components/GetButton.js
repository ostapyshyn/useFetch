import React from 'react';
import Button from '@mui/material/Button';

function GetButton({ get }) {
  return <Button onClick={get}>GET</Button>;
}

export default GetButton;
