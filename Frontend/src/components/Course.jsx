import React from 'react';
import Cards from './Cards'; 
import { Link } from 'react-router-dom';// assuming Cards component is imported

import list from '../../public/list.json';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items:center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">We are delighted to have you <span className="text-pink-500">here!</span></h1>
          <p className="mt-12">It is built with a lot of hard work and patience and made successful by Sujan Chaudhary</p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-4">Back</button>
          </Link>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
