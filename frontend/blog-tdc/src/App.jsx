import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
        {/* <Route path="/posts/:id" component={ PostDetails } /> */}
      </Routes>
    </div>
    </Router>
  )
}

export default App
