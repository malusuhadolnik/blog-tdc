// import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
function App() {

  return (
    // <div className="App">
    //   Vite APP
    // </div>
    <Router>
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/create" element={<Create />}/> */}
        {/* <Route path="/organizacao-pessoal" element={<Organization />}/> */}
        {/* <Route path="/criatividade" element={<Creativity />}/> */}
        {/* <Route path="/papelaria" element={<Stationary />}/> */}
        <Route path="/posts/:id" element={ <PostDetails/> } />
      </Routes>
    </div>
    </Router>
  )
}

export default App
