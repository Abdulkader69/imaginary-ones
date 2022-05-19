import Phase1IMG1 from '../assets/images/walk-1.jpg';
import Phase1Video1 from '../assets/videos/walk-1.mp4';
import Phase1IMG2 from '../assets/images/walk-2.jpg';
import Phase1Video2 from '../assets/videos/walk-2.mp4';
import Phase1IMG3 from '../assets/images/walk-3.jpg';
import Phase1Video3 from '../assets/videos/walk-3.mp4';
import BallGreen from '../assets/images/ball-green.png';
const WorldPhaseOne = () => {
  return (
    <>
      <div className="phase phase-one bg-[#fff1f1] pb-12">
        <div className="relative max-w-[1500px] m-auto px-7 z-20 flex flex-wrap">
          <div className="sidebar left relative text-center w-1/5 pt-5">
            <img
              src={BallGreen.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto"
            />
          </div>
          <div className="content w-4/5 max-w-4xl p-10">
            <h2 className="text-3xl font-filson font-extrabold text-black">
              Phase 01
            </h2>
            <h3 className="text-[2.75rem] text-[#1ab791] font-filson font-extrabold mb-5">
              The Idea - (We&apos;re Here!)
            </h3>
            <div className="context text-2xl text-black/80 leading-6">
              <p className="mb-4">Ideate. Design. Community-Building.</p>
              <p className="mb-4">
                The project sparked from a single moment of inspiration. With
                some imagination and work, it started to take shape.
              </p>
              <p className="mb-4">
                With 8888 unique NFTs, their walks mark the first step of IOs
                penetrating the scene.
              </p>
            </div>
          </div>
          <div className="media relative w-full">
            <div className="media-list w-full max-w-4xl m-auto flex relative">
              <div className="phase-video mx-2 rounded-[53px] overflow-hidden">
                <video autoPlay loop muted playsInline poster={Phase1IMG1.src}>
                  <source data-src={Phase1Video1} src={Phase1Video1} />
                </video>
              </div>
              <div className="phase-video mx-2 rounded-[53px] overflow-hidden">
                <video autoPlay loop muted playsInline poster={Phase1IMG2.src}>
                  <source data-src={Phase1Video2} src={Phase1Video2} />
                </video>
              </div>
              <div className="phase-video mx-2 rounded-[53px] overflow-hidden">
                <video autoPlay loop muted playsInline poster={Phase1IMG3.src}>
                  <source data-src={Phase1Video3} src={Phase1Video3} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseOne;
