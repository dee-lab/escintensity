import React from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

const ImageCarousel = ({slide, data}) => {
  const ref = React.useRef();
 
  return (  
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          else if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              data={data}
              carouselWidth={parentWidth}
              slideWidth={350}
              slideComponent={slide}
              maxVisibleSlide={3}
              currentVisibleSlide={currentVisibleSlide}
              useGrabCursor={true}
            />
          );
        }}
      />
  );
};

export default ImageCarousel;
