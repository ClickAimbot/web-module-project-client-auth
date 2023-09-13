import React from 'react';

import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import Login from './components/login';
import FriendsList from './components/friendslist';
import AddFriend from './components/addfriend';

function App() {
  return (
    <div className="App">
      <h1>Friends DataBase </h1>
        <Link className="link" to="/login">Login.</Link>
        <Link className="link" to="/addfriend">AddFriend.</Link>
        <Link className="link" to="/friendslist">FriendsList.</Link>
        <Link className="link" to="/logout">Logout.</Link>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friendslist" element={<FriendsList />} />
        <Route path="/addfriend" element={<AddFriend />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
