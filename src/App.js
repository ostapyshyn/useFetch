import React, { useEffect } from 'react';

import useFetch from './hooks/useAxios';

import ButtonGroup from '@mui/material/ButtonGroup';

import PostButton from './components/PostButton';
import GetButton from './components/GetButton';
import PutButton from './components/PutButton';
import PatchButton from './components/PatchButton';
import DeleteButton from './components/DeleteButton';

import './App.css';

function App() {
  const [{ response, error, isLoading }, doFetch] = useFetch('https://jsonplaceholder.typicode.com/users');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Users:</h1>
        <div className='App'>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <div>
              {error && (
                <div>
                  <p>{error.message}</p>
                </div>
              )}
              <div>
                <ul>{response && response && response.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
              </div>
            </div>
          )}
        </div>

        <ButtonGroup variant='contained' aria-label='outlined primary button group'>
          <GetButton get={doFetch} />
          <PostButton />
          <PutButton />
          <PatchButton />
          <DeleteButton />
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
