import Sign from '../assets/images/sign.jpg';
import BallYellow from '../assets/images/ball-yellow.png';
const WorldPhaseFour = () => {
  return (
    <>
      <div className="phase phase-five bg-[#ffe9fd] pt-12">
        <div className="relative max-w-[1500px] m-auto px-7 z-20 flex flex-wrap">
          <div className="media relative w-full pb-20">
            <div className="media-list flex items-center justify-between">
              <img
                src={Sign.src}
                alt="BallGreen"
                className="max-w-[50%] rounded-[50px]"
              />
            </div>
          </div>
          <div className="sidebar right relative text-center w-1/5">
            <img
              src={BallYellow.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute bottom-20"
            />
          </div>
          <div className="content w-4/5 px-10 pb-52">
            <h2 className="text-3xl font-filson font-bold text-extrabold">
              Phase 05
            </h2>
            <h3 className="text-[2.75rem] text-[#4e9ae0] font-filson font-extrabold mb-5">
              The Expansion
            </h3>
            <div className="context text-2xl text-black/80 leading-6">
              <p className="mb-8">Experience. Breakthrough. Soar.</p>
              <p className="mb-8">We welcome the world into our ecosystem.</p>
              <p className="mb-8">
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
