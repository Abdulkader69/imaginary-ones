import React from 'react';
import { Link } from 'react-scroll';
import BannerImg from '../assets/images/key-visual-desktop.jpg';
import BannerVideoMP4D from '../assets/videos/key-visual-desktop.mp4';
import BannerVideoMP4M from '../assets/videos/key-visual-mobile.mp4';

const BannerVideo = () => {
  return (
    <>
      <div
        id="first-section"
        className="home-banner-wrapper relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 right-0 m-auto scale-105 object-cover w-full h-full transition ease-in-out hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          poster={BannerImg.src}
        >
          <source data-src={BannerVideoMP4D} src={BannerVideoMP4D} />
        </video>
        <video
          className="absolute top-0 left-0 right-0 m-auto scale-105 object-cover w-full h-full transition ease-in-out block md:hidden"
          autoPlay
          loop
          muted
          playsInline
          poster={BannerImg.src}
        >
          <source data-src={BannerVideoMP4M} src={BannerVideoMP4M} />
        </video>
        <Link to="target" spy={true} smooth={true} duration={500}>
          {' '}
          <div className="absolute left-1/2 bottom-8 z-10 -translate-x-1/2 text-center cursor-pointer">
            <p className="text-base uppercase text-white mb-2 tracking-[2px]">
              EXPLORE
            </p>
            <div className="arrow w-14 h-14 m-auto bg-black rounded-full shadow-arrow flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                className="w-10 h-10 bounce"
              >
                <path
                  fill="white"
                  d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z"
                />
              </svg>
            </div>
          </div>{' '}
        </Link>
      </div>
      <div id="target"></div>
    </>
  );
};

export default BannerVideo;
