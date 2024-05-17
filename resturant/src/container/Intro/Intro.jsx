import React, { useRef } from 'react';

import './Intro.css';
import { images } from "../../constants/"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from "../../constants";
import { useState } from 'react';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  function handleVideo() {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }


  return (
    <div className=' video'>

      <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef} />


      <div className="video_overlay  flex__center">
        <div onClick={handleVideo} className="  video_overlay_circle flex__center">
          {playVideo ? < BsPauseFill color='#fff' fontSize={30} /> : < BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>



    </div >
  )


};

export default Intro;
