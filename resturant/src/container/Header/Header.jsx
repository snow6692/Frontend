import React from 'react';

import './Header.css';
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading"

const Header = () => (
  <section className='header section__padding app__wrapper ' id='home'>
    <div className='header_content app__wrapper_info '>
      <SubHeading title="Chase the new Flavour" />
      <img src="" alt="" />

      <h1 className='header_h1'>The key to Fine dining</h1>
      <p className=' p__opensans' style={{ margin: "2rem 0", color: "gray" }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom__button '>Explore Menu</button>

    </div>

    <div className="  header_img app__wrapper_img">
      <img src={images.welcome} alt=" " />
    </div>
  </section>
);

export default Header;
