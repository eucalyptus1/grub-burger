import React from 'react';

import '../../index.css';
import { ImageData } from '../DisplayBox/ImageData';
import DisplayBox from '../DisplayBox/index';


function Home() {


  return (
      <div>
        <DisplayBox image={ImageData}/>
      </div>
  );
}

export default Home;