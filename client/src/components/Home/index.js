import React from 'react';


import { ImageData } from '../DisplayBox/ImageData';
import DisplayBox from '../DisplayBox/index';
import Menu from '../Menu';


function Home() {

  return (
      <div>
        <DisplayBox image={ImageData}/>
      </div>,
      <div>
       <Menu/>
      </div>
  );
}

export default Home;