'use client'

import React from 'react';
import Image from "next/image";
import ImageCarousel from "../components/carousel";

const data = [
  {cover: "/slider/image-1.png", title: "image 1"},
  {cover: "/slider/image-2.png", title: "image 2"},
  {cover: "/slider/image-3.jpg", title: "image 3"}, 
  {cover: "/slider/image-4.png", title: "image 4"}, 
  {cover: "/slider/image-5.jpg", title: "image 5"}, 
];

const Slide = React.memo(function slide(props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];

  return (
    <div className='bg-white rounded-xl'>
      <Image
        src={cover}
        draggable={false}
        alt="Transformational before and after picture" 
        height={300}
        width={300} 
        className='m-2 inline-block'
      />
    </div>
  );
});

const ClientResultsSection = () => {
  return (
   <section className="bg-zinc-900 py-20">
     <ImageCarousel slide={Slide} data={data}/>
   </section>
  )
 }

export default ClientResultsSection;
