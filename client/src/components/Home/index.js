import React from 'react';


import { ImageData } from '../DisplayBox/ImageData';
import DisplayBox from '../DisplayBox/index';
import Menu from '../Menu';


function Home() {

  return (
      <div className='container'>
        <DisplayBox image={ImageData}/> 
       <Menu/>
      </div>
  );
}

export default Home;