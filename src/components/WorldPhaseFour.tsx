import Coin from '../assets/images/coin.gif';
import World from '../assets/images/world.jpg';
import BallBlueLight from '../assets/images/ball-blue-light.png';
const WorldPhaseFour = () => {
  return (
    <>
      <div className="phase phase-four bg-[#fff4ef] pt-12 relative z-40">
        <div className="relative max-w-[1500px] m-auto px-4 lg:px-7 z-20 flex flex-wrap">
          <div className="media relative w-full pb-20">
            <div className="media-list flex items-center justify-between">
              <img
                src={World.src}
                alt="BallGreen"
                className="max-w-[30%] xl:max-w-[50%] rounded-[50px]"
              />
              <img
                src={BallBlueLight.src}
                alt="BallGreen"
                className="max-w-[20%] xl:max-w-[50%] mr-0 ml-auto pl-5"
              />
            </div>
          </div>
          <div className="content w-5/6 md:w-4/5 sm:px-5 lg:px-10 pb-32 lg:pb-52">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-filson font-extrabold text-black pb-1">
              Phase 04
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-5xl text-[#1cc7bc] font-filson font-extrabold mb-5">
              The Imaginary World
            </h3>
            <div className="context text-lg sm:text-xl lg:text-2xl text-black/80 leading-6">
              <p className="mb-4 lg:mb-8">Utility. Coins. Development.</p>
              <p className="mb-4 lg:mb-8">
                Welcome to the Imaginary World, where we start to work, play,
                and learn together.
              </p>
              <p className="mb-4 lg:mb-8">
                Introduction of IO tokenomics. Holders can expect multiple use
                cases.
              </p>
            </div>
          </div>
          <div className="sidebar right relative text-center w-1/6 md:w-1/5">
            <img
              src={Coin.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute -bottom-[30px] sm:-bottom-[80px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseFour;
