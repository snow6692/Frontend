import React from 'react';
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading"
const FindUs = () => (
  <section className='header section__padding app__wrapper app__bg ' id='home'>
    <div className='header_content app__wrapper_info '>
      <SubHeading title="Contact" />
      <img src="" alt="" />

      <h1 className='header_h1'>Find Us</h1>
      <p className=' p__opensans' style={{ margin: "2rem 0", color: "gray" }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG </p>
      <div className=' open' >
        <p className=' hours' >Opening Hours</p>
        <p className='days p__opensans'> Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='days p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>

      </div>
      <button className='custom__button  '>Explore Menu</button>

    </div>

    <div className="  header_img app__wrapper_img">
      <img src={images.findus} alt=" " />
    </div>
  </section>
);

export default FindUs;
