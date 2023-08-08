// import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Organization from './pages/Organization';
import Creativity from './pages/Creativity';
import Stationary from './pages/Stationary';

function App() {
  return (
    // <div className="App">
    //   Vite APP
    // </div>
    <Router>
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/create" element={<CreatePost />}/>
        <Route path="/organizacao-pessoal" element={<Organization />}/>
        <Route path="/criatividade" element={<Creativity />}/>
        <Route path="/papelaria" element={<Stationary />}/>
        <Route path="/posts/:id" element={ <PostDetails/> } />
      </Routes>
    </div>
    </Router>
  )
}

export default App
