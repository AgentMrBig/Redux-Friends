import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='navi'>
          <NavLink className='navLink' to='/'>Home</NavLink>
          <NavLink className='navLink' to='/friend-form'>Friends?</NavLink>
        </div>
        <Route
          exact
          path='/'
          render={props => <Friends {...props} friends={} />}
        />
        <Route
          exact
          path='/friend-form'
          render={props => <FriendsForm {...props} loadFriends={} addFriend={this.addFriend} />}
        />
      </header>
    </div>
  );
}

export default App;
