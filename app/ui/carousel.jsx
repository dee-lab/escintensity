'use client'

import React, { useState } from 'react';
import Image from "next/image";

const IMAGES = [
  "/slider/image-1.png", 
  "/slider/image-2.png", 
  "/slider/image-3.jpg", 
  "/slider/image-4.png", 
  "/slider/image-5.jpg", 
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
  //   carouselRef.current.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  // }, [currentImageIndex]);

  const previousImageIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
  const nextImageIndex = (currentImageIndex + 1) % IMAGES.length;

  const goToPreviousImage = () => {
    setCurrentImageIndex(previousImageIndex);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(nextImageIndex); 
  };

  return (
    <section className="carousel flex flex-wrap py-10 justify-center items-center m-0">
      <button className="border rounded-full border-gray-300 hover:border-2 w-10 h-10 items-center justify-center pt-1 mr-2" onClick={goToPreviousImage}>
        <span className="material-symbols-outlined">
          arrow_back
        </span>
      </button>

      <div className="preview-prev mr-2">
        <Image
          src={IMAGES[previousImageIndex]}
          alt={`Previous before and after picture`}
          height={300}
          width={300}
        />
      </div>

      <div className="carousel-content">
        <Image
          src={IMAGES[currentImageIndex]}
          alt={`Current before and after picture`} 
          height={400}
          width={400}
        />
      </div>
      
      <div className="preview-next ml-2">
        <Image
          src={IMAGES[nextImageIndex]}
          alt={`Next before and after picture`}
          height={300}
          width={300}
        />
      </div>
      
      <button className="border rounded-full border-gray-300 hover:border-2 w-10 h-10 items-center justify-center pt-1 ml-2" onClick={goToNextImage}>
        <span className="material-symbols-outlined">
            arrow_forward
        </span>
      </button>
    </section>
  );
};

export default ImageCarousel;
