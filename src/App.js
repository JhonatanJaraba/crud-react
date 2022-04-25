import React from 'react';
import './App.css';

import Links from './components/Links'
import UserForm from './components/UserForm';

function App() {
  return (
    <div className='container p-6'>
      <div className='row'>
        <UserForm/>
        <Links/>
      </div>
    </div>
  );
}

export default App;
