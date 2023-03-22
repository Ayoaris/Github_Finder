import React from 'react'
import UsersResults from '../components/Users/UsersResult';
import UserSearch from '../components/Users/UserSearch';


function Home() { 
 
  return (
    <>
      <UserSearch/>
      <UsersResults/>
    </>
  );
}

export default Home;
