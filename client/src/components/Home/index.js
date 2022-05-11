import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/images/burgers.jpg"
import image2 from "../../assets/desserts/fried-oreos.webp"
import image3 from "../../assets/drinks/beer.jpg"


import Menu from '../Menu';


function Home() {

  return (
      <div className='container'>
        <Carousel className='mt-5'>
          <Carousel.Item>
            <img
            className='d-block w-100 item'
            src= {image1}
            
            />
            <Carousel.Caption >
              <h1>Delicious Burgers</h1>
              <h3>$9</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className='d-block w-100 item'
            src={image2}
            />
            <Carousel.Caption>
              <h1 className='text-dark'>Fried Oreos</h1>
              <h3 className='text-dark'>$4</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className='d-block w-100 item'
            src={image3}
            />
            <Carousel.Caption>
              <h1>House Beer</h1>
              <h3>$5</h3>
            </Carousel.Caption>
          </Carousel.Item>
           
        </Carousel>
         
       <Menu/>
      </div>
  );
}

export default Home;