import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from "../../constants/"

const Laurels = () => (
  <div className='awards app__bg section__padding ' id='awards'>
    <div className='awards_content app__wrapper_info'>
      <SubHeading title="Awards & recognition" />
      <h1 className=' awards_heading'>Our Laurels</h1>

      <div className=' awards_container'>
        {
          data.awards.map((award) => <Award url={award.imgUrl} heading={award.title} key={award.title} />)

        }

      </div>
    </div>

    <div className="awards_img app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;

function Award({ url, heading }) {
  return (
    <div className="award">
      <img src={url} alt="" />

      <div className='award_content'>
        <p className=' p__cormorant' style={{ color: "#DCCA87" }}>{heading}</p>
        <p className=' p__cormorant'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div >

  )
}