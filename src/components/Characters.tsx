import React from 'react';
import CharactersImg from '../assets/images/slider-desktop.jpg';
import CharactersVideoMP4D from '../assets/videos/slider-desktop.mp4';
import CharactersVideoMP4M from '../assets/videos/slider-mobile.mp4';
import RainBowIMG from '../assets/images/rainbow-circle-black.jpeg';
import RainBowMP4 from '../assets/videos/rainbow-circle-black.mp4';

const Characters = () => {
  return (
    <div className="characters-section bg-[#fbf2ff] relative">
      <div className="first-layer w-full max-w-5xl m-auto px-7 py-36">
        <h2 className="text-9xl font-filson font-extrabold uppercase text-center">
          <span className="inline-block pt-2 pr-5">8888</span>
          <span className="rainbow-text inline-block align-top leading-[1.2] relative w-[594px] h-[140px]">
            <video
              className="relative m-auto w-full h-full object-cover transition ease-in-out"
              autoPlay
              loop
              muted
              playsInline
              poster={RainBowIMG.src}
            >
              <source data-src={RainBowMP4} src={RainBowMP4} />
            </video>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 594 145"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="maskblack" x="0" y="0" width="100%" height="100%">
                  <rect x="0" y="0" width="100%" height="100%"></rect>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    Magical
                  </text>
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%"></rect>
            </svg>
          </span>
          <br />
          characters
        </h2>
      </div>
      <div className="collection-marquee relative overflow-auto py-5 w-full bg-white">
        <div className="inner w-fit flex relative animation-marquee">
          <span className="text-base font-filson font-extrabold px-2 text-black whitespace-nowrap uppercase w-[16.25rem] will-change-transform txt-shadow animation-marquee">
            Imaginary Ones Collection ∙ &nbsp;
          </span>
        </div>
      </div>
      <div className="characters-video relative">
        <video
          className="relative m-auto w-full h-auto transition ease-in-out hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          poster={CharactersImg.src}
        >
          <source data-src={CharactersVideoMP4D} src={CharactersVideoMP4D} />
        </video>
        <video
          className="relative m-auto w-full h-auto transition ease-in-out block md:hidden"
          autoPlay
          loop
          muted
          playsInline
          poster={CharactersImg.src}
        >
          <source data-src={CharactersVideoMP4M} src={CharactersVideoMP4M} />
        </video>
      </div>
      <div className="collection-marquee relative overflow-auto py-5 w-full bg-white">
        <div className="inner w-fit flex relative animation-marquee">
          <span className="text-base font-filson font-extrabold px-2 text-black whitespace-nowrap uppercase w-[16.25rem] will-change-transform txt-shadow animation-marquee">
            Imaginary Ones Collection ∙ &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Characters;
