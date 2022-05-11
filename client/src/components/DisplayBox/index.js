import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ImageData } from "./ImageData";




const DisplayBox = ({ image }) => {
    const [currentImage, setCurrentImage] = useState(0);

    // const nextImage = () => {
    //     setCurrentImage(currentImage === img.length - 1 ? 0 : currentImage + 1);
    // };

    useEffect(() => {
        const timer = setInterval(() => {
            if(currentImage === image.length - 1) {
                setCurrentImage(0);
            } 
            else {
                 setCurrentImage(currentImage + 1);
            }
        }, 5000)
        
        return () => clearInterval(timer);
    }, [currentImage, image.length])

    return (
        <section >
            <div className="slideShow justify content-center">
            <img src={image[currentImage]} style={{ width:"500px", height:"500px"}} alt="food" className="slide" />
            </div>
        </section>
        
    );
  }

  export default DisplayBox;