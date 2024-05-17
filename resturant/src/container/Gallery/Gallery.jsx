import React, { useState, useRef } from 'react';

import './Gallery.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { SubHeading } from '../../components';
import { images } from "../../constants/"

const Gallery = () => {
  const scrollRef = useRef()
  const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery03]

  function scroll(dicrection) {
    const { current } = scrollRef;
    if (dicrection === "left") {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }

  }

  useState()
  return (
    <div className='gallery flex__center'>
      <div className=" gallery_content">
        <SubHeading title="Instagram" />
        <h1 className=' headtext__cormorant'> Photo Gallery</h1>
        <p className=' p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className=' custom__button'>View More</button>
      </div>

      <div className='imgs'>
        <div className=' imgs_container' ref={scrollRef}>
          {image.map((image, index) =>
            <div className='  images_card flex__center ' key={index}>
              <img src={image} />
              <BsInstagram className=' insatgram' />
            </div>
          )}
        </div>

        <div className="arrows">
          <BsArrowLeftShort className='gallery_arrow_icon' onClick={() => scroll("left")} />
          <BsArrowRightShort className='gallery_arrow_icon' onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );

}

export default Gallery;
