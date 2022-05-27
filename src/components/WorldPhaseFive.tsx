import Sign from '../assets/images/sign.jpg';
import BallYellow from '../assets/images/ball-yellow.png';
const WorldPhaseFour = () => {
  return (
    <>
      <div className="phase phase-five bg-[#ffe9fd] pt-12">
        <div className="relative max-w-[1500px] m-auto px-4 md:px-7 z-20 flex flex-wrap">
          <div className="media relative w-full pb-20">
            <div className="media-list flex items-center justify-between">
              <img
                src={Sign.src}
                alt="BallGreen"
                className="max-w-[100px] sm:max-w-[200px] lg:max-w-[50%] rounded-[50px]"
              />
            </div>
          </div>
          <div className="sidebar right relative text-center w-1/6 md:w-1/5 2xl">
            <img
              src={BallYellow.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute bottom-20"
            />
          </div>
          <div className="content w-5/6 md:w-4/5 px-5 lg:px-10 pb-32 lg:pb-52">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-filson font-extrabold text-black pb-1">
              Phase 05
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-5xl text-[#4e9ae0] font-filson font-extrabold mb-5">
              The Expansion
            </h3>
            <div className="context text-lg sm:text-xl lg:text-2xl text-black/80 leading-6">
              <p className="mb-4 lg:mb-8">Experience. Breakthrough. Soar.</p>
              <p className="mb-4 lg:mb-8">
                We welcome the world into our ecosystem.
              </p>
              <p className="mb-4 lg:mb-8">
                The Imaginary World continues to expand. Explore Imaginary Lands
                and Companions that provide additional utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseFour;
