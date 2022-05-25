import React from 'react';
import sparkImg from '../assets/images/spark.jpg';
import sparkVideo from '../assets/videos/spark.mp4';
import goodVibeImg from '../assets/images/good-vibes.jpg';
import goodVibeVideo from '../assets/videos/good-vibes.mp4';
import DreamBigImg from '../assets/images/dream-big.jpg';
import DreamBigVideo from '../assets/videos/dream-big.mp4';

const ImaginaryValues = () => {
  return (
    <div className="imaginary-values-wrapper bg-[rgb(255,248,243)] overflow-hidden relative">
      <h2 className="text-center text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-[rgb(132,89,255)] pb-12 pt-20 lg:pt-32 leading-[1] font-filson uppercase font-extrabold">
        Imaginary Values?
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[rgb(255,236,237)] p-8 2xl:p-14 text-center">
          <div className="video pt-0 pb-0 sm:pb-auto p-14">
            <video autoPlay loop muted playsInline poster={sparkImg.src}>
              <source data-src={sparkVideo} src={sparkVideo} />
            </video>
          </div>
          <h3 className="text-black text-[28px] xl:text-[35px] 2xl:text-[48px] text-center  font-filson uppercase font-extrabold">
            Find Your Spark
          </h3>
          <p className="text-black text-xl 2xl:text-2xl text-center">
            Do what brings you joy. A happy person is the most creative. A
            genuine smile is the most contagious.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[rgb(240,255,248)] p-8 2xl:p-14 text-center">
          <div className="video pt-0 pb-0 sm:pb-auto p-14">
            <video autoPlay loop muted playsInline poster={goodVibeImg.src}>
              <source data-src={goodVibeVideo} src={goodVibeVideo} />
            </video>
          </div>
          <h3 className="text-black text-[28px] xl:text-[35px] 2xl:text-[48px] text-center  font-filson uppercase font-extrabold">
            Good Vibes Only
          </h3>
          <p className="text-black text-xl 2xl:text-2xl text-center">
            Community building is our priority. Send love, share ideas and make
            the world a better place.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[rgb(244,242,255)] p-8 2xl:p-14 text-center">
          <div className="video pt-0 pb-0 sm:pb-auto p-14">
            <video autoPlay loop muted playsInline poster={DreamBigImg.src}>
              <source data-src={DreamBigVideo} src={DreamBigVideo} />
            </video>
          </div>
          <h3 className="text-black text-[28px] xl:text-[35px] 2xl:text-[48px] text-center  font-filson uppercase font-extrabold">
            Dream Big
          </h3>
          <p className="text-black text-xl 2xl:text-2xl text-center">
            Make your wildest imaginations come true. Aim for the moon and enjoy
            the stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImaginaryValues;
