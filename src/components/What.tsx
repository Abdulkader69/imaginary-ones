import React, { useState } from 'react';
import Draggable from 'react-draggable';
import BallPink from '../assets/images/ball-beige.png';
import BallLightGreen from '../assets/images/ball-purple.png';
import Frankenstein from '../assets/images/frankenstein.png';
import Mummy from '../assets/images/mummy.png';
import Astronaut from '../assets/images/astronaut-2.png';
import RedHood from '../assets/images/red-riding-hood.png';
import Skeletor from '../assets/images/skeletor.png';

const What = () => {
  const [changeImage, setChangeImage] = useState<boolean>(false);
  const [changeImage2, setChangeImage2] = useState<boolean>(false);
  const [changeImage3, setChangeImage3] = useState<boolean>(false);
  return (
    <div className="why-section py-80 bg-[#8459ff] relative overflow-hidden">
      <div className="first-layer relative max-w-[1500px] m-auto px-7 z-20">
        <h2 className="headline text-9xl font-filson text-white font-extrabold uppercase">
          <div className="block relative">
            <div className="inline-block relative mr-8">
              <div className=" inline-block">W</div>
              <div className=" inline-block">h</div>
              <div className=" inline-block">a</div>
              <div className=" inline-block">t</div>
            </div>
            <div className="inline-block relative">
              <div className="relative inline-block">i</div>
              <div className="relative inline-block">s</div>
            </div>
          </div>
          <div className="block relative text-[#fd0]">
            <div className="inline-block relative mr-8">
              <div className="relative inline-block">I</div>
              <div className="relative inline-block">m</div>
              <div className="relative inline-block">a</div>
              <div className="relative inline-block">g</div>
              <div className="relative inline-block">i</div>
              <div className="relative inline-block">n</div>
              <div className="relative inline-block">a</div>
              <div className="relative inline-block">r</div>
              <div className="relative inline-block">y</div>
            </div>
            <div className="inline-block relative">
              <div className="relative inline-block">o</div>
              <div className="relative inline-block">n</div>
              <div className="relative inline-block">e</div>
              <div className="relative inline-block">s</div>
              <div className="relative inline-block">?</div>
            </div>
          </div>
        </h2>
        <div className="why-text text-[2rem] text-white mt-8 leading-[1.4]">
          <p className="mb-8">
            Imaginary Ones is a delightful 3D animated art with an initial drop
            of 8888 unique NFTs on the Ethereum network. The project believes in
            using art to spread love, positivity, and creativity.
          </p>
        </div>
      </div>
      <div className="why-item floating absolute top-0 left-0 w-full h-full duration1">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div className="absolute top-[200px] -left-[150px]">
            <img src={BallPink.src} alt="BallPink" />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute top-0 left-0 w-full h-full duration2">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div className="absolute -right-[100px] -bottom-[200px]">
            <img
              src={BallLightGreen.src}
              alt="BallLightGreen"
              className="w-[450px]"
            />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute right-[5%] top-[23%] w-[320px] h-[320px] duration3 z-10">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div
            className="absolute cursor-pointer"
            onClick={() => setChangeImage((prevMode) => !prevMode)}
          >
            <img
              src={changeImage ? Frankenstein.src : Astronaut.src}
              alt="Frankenstein"
              className="rotate-[15deg] pointer-events-none"
            />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute left-[30%] top-[3%] w-[320px] h-[320px] duration3 z-10">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div
            className="absolute cursor-pointer"
            onClick={() => setChangeImage3((prevMode) => !prevMode)}
          >
            <img
              src={changeImage3 ? Frankenstein.src : Skeletor.src}
              alt="Frankenstein"
              className="rotate-[15deg] pointer-events-none"
            />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute bottom-0 left-[2%] w-[360px] h-[360px] duration4 z-10">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div
            className="absolute cursor-pointer"
            onClick={() => setChangeImage2((prevMode) => !prevMode)}
          >
            <img
              src={changeImage2 ? Mummy.src : RedHood.src}
              alt="Mummy"
              className="rotate-[-5deg] delay-500 pointer-events-none"
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default What;
