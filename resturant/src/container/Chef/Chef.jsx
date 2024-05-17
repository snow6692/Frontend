import React from 'react';

import './Chef.css';
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading"
const Chef = () => (
  <section className='chef    section__padding app__wrapper ' >

    <div className='chef_content app__wrapper_info '>
      <SubHeading title="Chef's Word" />
      <img src="" alt="" />

      <h1 className='chef_h1'>What we believe in</h1>
      <div className='  '>
        <img src={images.quote} alt="" className='quote' />
        <p className=' p__opensans' style={{ margin: "2rem 0", color: "gray" }}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>

      </div>
      <div className='singature'>
        <h2 >Kevin Luo</h2>
        <h4>Chef & Founder</h4>


      </div>
      <img src={images.sign} alt="" className='sign' />
    </div>



    <div className="  chef_img app__wrapper_img">
      <img src={images.chef} alt=" " />
    </div>
  </section>
);

export default Chef;
