import React, { useState, useEffect } from "react";
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
        <section>
        {/* {ImageData.map((image, index) => {
            return( */}
            <div className="slideShow">
            <img src={image[currentImage]} alt="burger" className="slide" />
            </div>
      
        </section>
    );
  }

  export default DisplayBox;