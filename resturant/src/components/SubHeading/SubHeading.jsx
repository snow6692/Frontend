import React from 'react';
import { images } from "../../constants"
import "./subHeading.css"
const SubHeading = ({ title, style }) => (
  <div style={{ marginBottom: "1rem", }}>
    <p className={`${style ? "style" : " p__cormorant"} `}>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon_img' />
  </div >
);

export default SubHeading;
