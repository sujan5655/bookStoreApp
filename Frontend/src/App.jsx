import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import { Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import { Link } from 'react-router-dom'; 
import Login from "./components/Login";
function App() {
  return (
    <>
      {/*<Home/>
      <Course/>*/}
      <div className='dark:bg-slate-90 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
