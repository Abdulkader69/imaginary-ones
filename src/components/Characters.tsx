import React from 'react';
import CharactersImg from '../assets/images/slider-desktop.jpg';
import CharactersVideoMP4D from '../assets/videos/slider-desktop.mp4';
import CharactersVideoMP4M from '../assets/videos/slider-mobile.mp4';

const Characters = () => {
  return (
    <div className="characters-section bg-[#fbf2ff] relative">
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
