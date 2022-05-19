import Cyclops from '../assets/images/cyclops.gif';
import GameBoy from '../assets/images/gameboy.gif';
import BallPurpleLight from '../assets/images/ball-purple-light.png';
const WorldPhaseTwo = () => {
  return (
    <>
      <div className="phase phase-two bg-[#e8e0ff]">
        <div className="relative max-w-[1500px] m-auto px-7 z-20 flex">
          <div className="content w-4/5 px-10 py-64">
            <h2 className="text-3xl font-filson font-bold text-extrabold">
              Phase 02
            </h2>
            <h3 className="text-[2.75rem] text-[#8459ff] font-filson font-extrabold mb-5">
              The Foundation
            </h3>
            <div className="context text-2xl text-black/80 leading-6">
              <p className="mb-8">Hire. Experiment. Build.</p>
              <p className="mb-8">
                Building dreams require the right people and tools. We will look
                to hire the best talents in the space that shares our vision.
              </p>
              <p className="mb-8">
                Together with the community, we will experiment, collaborate and
                steer IO towards the limitless potential of Web3.
              </p>
            </div>
          </div>
          <div className="sidebar right relative text-center w-1/5">
            <img
              src={Cyclops.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute -top-[60px]"
            />
            <img
              src={BallPurpleLight.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute top-1/2 -translate-y-1/2"
            />
            <img
              src={GameBoy.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto absolute -bottom-[80px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseTwo;
