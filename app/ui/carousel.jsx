'use client'

import React from 'react';
import Image from "next/image";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

const data = [
  {cover: "/slider/image-1.png", title: "image 1"},
  {cover: "/slider/image-2.png", title: "image 2"},
  {cover: "/slider/image-3.jpg", title: "image 3"}, 
  {cover: "/slider/image-4.png", title: "image 4"}, 
  {cover: "/slider/image-5.jpg", title: "image 5"}, 
];

const ImageCarousel = () => {

  const ref = React.useRef();
 
  return (
    <ResponsiveContainer
      carouselRef={ref}
      render={(parentWidth, carouselRef) => {
        let currentVisibleSlide = 5;
        if (parentWidth <= 1440) currentVisibleSlide = 3;
        else if (parentWidth <= 1080) currentVisibleSlide = 1;
        return (
          <StackedCarousel
            ref={carouselRef}
            data={data}
            carouselWidth={parentWidth}
            slideWidth={350}
            height={516}
            slideComponent={Slide}
            maxVisibleSlide={5}
            currentVisibleSlide={currentVisibleSlide}
            useGrabCursor={true}
          />
        );
      }}
    />
  );
};

const Slide = React.memo(function slide(props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];

  return (
    <div className='bg-white rounded-2xl'>
      <Image
        src={cover}
        draggable={false}
        alt={`Transformational before and after picture`} 
        height={300}
        width={300} 
        className='mr-2 ml-2 mt-10 mb-10 inline-block'
      />
    </div>
  );
});

export default ImageCarousel;
