import WebReelIMG from '../assets/images/webreel-mobile.jpg';
import WebReelVideo from '../assets/videos/webreel-mobile.mp4';
import RainBowIMG from '../assets/images/rainbow-circle-black.jpeg';
import RainBowMP4 from '../assets/videos/rainbow-circle-white.mp4';
import cmtImg from '../assets/images/dream-big.jpg';
import cmtVideo from '../assets/videos/rainbow-head-pink.mp4';

const Good = () => {
  return (
    <>
      <div className="good">
        <div className="flex flex-wrap">
          <div className="w-1/3 flex items-center justify-center bg-[#e3a8ff] py-40">
            <div className="good__rotating-text">
              We are going to
              <span className="rotating-text">
                <span className="text text-1">make</span>
                <span className="text text-2">moon</span>
                <span className="text text-3">love</span>
                <span className="text text-4">enjoy</span>
                <span className="text text-5">learn</span>
              </span>
              it
              <span className="font-neu inline-block leading-0 relative top-6">
                ~
              </span>
            </div>
          </div>
          <div className="w-2/3 bg-[#fff1e4] text-center overflow-hidden relative">
            <video
              className="m-auto w-auto absolute -top-[10%] h-[120%] block left-1/2 -translate-x-1/2"
              autoPlay
              loop
              muted
              playsInline
              poster={WebReelIMG.src}
            >
              <source data-src={WebReelVideo} src={WebReelVideo} />
            </video>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/3 bg-[#8459ff] relative h-[286px]">
            <div className="rainbow-text w-full h-full">
              <video
                className="relative block w-full h-full object-cover transition ease-in-out"
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
                viewBox="0 0 285 80"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%"></rect>
                    <text
                      x="50.5%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      #IONS
                    </text>
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%"></rect>
              </svg>
            </div>
          </div>
          <div className="w-[15%] bg-[#ffdbd2]">
            <video
              className="w-full h-full block"
              autoPlay
              loop
              muted
              playsInline
              poster={cmtImg.src}
            >
              <source data-src={cmtVideo} src={cmtVideo} />
            </video>
          </div>
          <div className="w-[51.666666%] overflow-hidden flex items-center bg-[#fd0]">
            <div className="collection-marquee relative w-full">
              <div className="inner w-fit flex relative animation-marquee">
                <span className="text-[9vw] font-filson leading-[1] mt-3 font-extrabold px-2 text-black whitespace-nowrap uppercase w-[16.25rem] will-change-transform txt-shadow2 animation-marquee">
                  Good Vibes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Good;
