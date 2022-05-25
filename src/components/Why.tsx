import React, { useState } from 'react';
import Draggable from 'react-draggable';
import BallPink from '../assets/images/ball-pink.png';
import BallLightGreen from '../assets/images/ball-light-green.png';
import Frankenstein from '../assets/images/frankenstein.png';
import Mummy from '../assets/images/mummy.png';

const Why = () => {
  const [changeImage, setChangeImage] = useState<boolean>(false);
  const [changeImage2, setChangeImage2] = useState<boolean>(false);
  return (
    <div className="why-section pt-40 pb-60 bg-[#eefff7] relative overflow-hidden">
      <div className="first-layer relative max-w-[1100px] m-auto px-7 z-20">
        <h2 className="headline text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-filson text-[#8459ff] font-extrabold uppercase">
          <div className="block relative">
            <div className="inline-block relative mr-4 xl:mr-6 2xl:mr-8">
              <div className=" inline-block">W</div>
              <div className=" inline-block">h</div>
              <div className=" inline-block">y</div>
            </div>
            <div className="inline-block relative">
              <div className="relative inline-block">B</div>
              <div className="relative inline-block">e</div>
            </div>
          </div>
          <div className="block relative text-[#fd0]">
            <div className="inline-block relative">
              <div className="relative inline-block">I</div>
              <div className="relative inline-block">m</div>
              <div className="relative inline-block">a</div>
              <div className="relative inline-block">g</div>
              <div className="relative inline-block">i</div>
              <div className="relative inline-block">n</div>
              <div className="relative inline-block">a</div>
              <div className="relative inline-block">r</div>
              <div className="relative inline-block">y</div>
              <div className="relative inline-block">?</div>
            </div>
          </div>
        </h2>
        <div className="why-text text-xl 2xl:text-2xl text-black mt-8 leading-[1.4]">
          <p className="mb-8">
            When we were young, we dreamt of being superheroes. Anything and
            everything seemed possible. However, as time went by, the reality of
            life robbed us of our childhood ambitions.
          </p>
          <p className="mb-8">
            The Imaginary Ones wish to re-ignite that spark once again. Embrace
            creativity and work on the dreams you once had. Muster your courage
            and rewrite your story.
          </p>
          <p className="mb-8">
            Enter the Imaginary World — where no ideas are too crazy nor dreams
            too foolish.
          </p>
          <p className="mb-8">Let&apos;s imagine. Together.</p>
        </div>
      </div>
      <div className="why-item hidden md:inline-block floating absolute top-0 left-0 w-full h-full duration1">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div className="absolute -bottom-[270px] 2xl:-bottom-[170px] -right-[250px] 2xl:-right-[150px]">
            <img src={BallPink.src} alt="BallPink" />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute -top-[15%] 2xl:top-0 -left-[10%] 2xl:left-0 w-full h-full duration2">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div className="absolute -left-[220px] top-[10px]">
            <img
              src={BallLightGreen.src}
              alt="BallLightGreen"
              className="w-[450px]"
            />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute hidden md:inline-block right-0 lg:right-[5%] -top-[5%] lg:top-[5%] 2xl:top-[23%] w-[320px] h-[320px] duration3 z-10">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div
            className="absolute cursor-pointer"
            onClick={() => setChangeImage((prevMode) => !prevMode)}
          >
            <img
              src={changeImage ? Frankenstein.src : Mummy.src}
              alt="Frankenstein"
              className="rotate-[15deg] pointer-events-none"
            />
          </div>
        </Draggable>
      </div>
      <div className="why-item floating absolute -bottom-[5%] 2xl:bottom-[5%] right-0 md:right-auto md:left-0 2xl:left-[2%] w-[280px] 2xl:w-[360px] h-[280px] 2xl:h-[360px] duration4 z-10">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div
            className="absolute cursor-pointer"
            onClick={() => setChangeImage2((prevMode) => !prevMode)}
          >
            <img
              src={changeImage2 ? Mummy.src : Frankenstein.src}
              alt="Mummy"
              className="rotate-[-5deg] delay-500 pointer-events-none"
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Why;
