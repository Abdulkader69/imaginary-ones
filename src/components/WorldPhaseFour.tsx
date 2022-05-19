import Coin from '../assets/images/coin.gif';
import World from '../assets/images/world.jpg';
import BallBlueLight from '../assets/images/ball-blue-light.png';
const WorldPhaseFour = () => {
  return (
    <>
      <div className="phase phase-four bg-[#fff4ef] pt-12">
        <div className="relative max-w-[1500px] m-auto px-7 z-20 flex flex-wrap">
          <div className="media relative w-full pb-20">
            <div className="media-list flex items-center justify-between">
              <img
                src={World.src}
                alt="BallGreen"
                className="max-w-[50%] ml-10 rounded-[50px]"
              />
              <img
                src={BallBlueLight.src}
                alt="BallGreen"
                className="max-w-[50%] mr-0 ml-auto"
              />
            </div>
          </div>
          <div className="content w-4/5 px-10 pb-52">
            <h2 className="text-3xl font-filson font-bold text-extrabold">
              Phase 04
            </h2>
            <h3 className="text-[2.75rem] text-[#1cc7bc] font-filson font-extrabold mb-5">
              The Imaginary World
            </h3>
            <div className="context text-2xl text-black/80 leading-6">
              <p className="mb-8">Utility. Coins. Development.</p>
              <p className="mb-8">
                Welcome to the Imaginary World, where we start to work, play,
                and learn together.
              </p>
              <p className="mb-8">
                Introduction of IO tokenomics. Holders can expect multiple use
                cases.
              </p>
            </div>
          </div>
          <div className="sidebar right relative text-center w-1/5">
            <img
              src={Coin.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute -bottom-[80px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseFour;
