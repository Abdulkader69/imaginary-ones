import Phase1IMG1 from '../assets/images/car.jpg';
import Phase1Video1 from '../assets/videos/car.mp4';
import Phase1IMG2 from '../assets/images/jeep.jpg';
import Phase1Video2 from '../assets/videos/jeep.mp4';
import Phase1IMG3 from '../assets/images/plane.jpg';
import Phase1Video3 from '../assets/videos/plane.mp4';
import BallGreen from '../assets/images/ball-green.png';
const WorldPhaseOne = () => {
  return (
    <>
      <div className="phase phase-three bg-[#ecffed] pt-12">
        <div className="relative max-w-[1500px] m-auto px-7 z-20 flex flex-wrap">
          <div className="media relative w-full pb-24">
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
          <div className="sidebar left relative text-center w-1/5 pt-5">
            <img
              src={BallGreen.src}
              alt="BallGreen"
              className="w-full max-w-[270px] m-auto"
            />
          </div>
          <div className="content w-4/5 max-w-4xl p-10 pb-40">
            <h2 className="text-3xl font-filson font-extrabold text-black">
              Phase 03
            </h2>
            <h3 className="text-[2.75rem] text-[#1c69db] font-filson font-extrabold mb-5">
              The Movement
            </h3>
            <div className="context text-2xl text-black/80 leading-6">
              <p className="mb-8">Strap up. Ignite. Engage.</p>
              <p className="mb-8">
                Watch out for the Imaginary Vehicles, “Vroom, Vroom!”. When
                there are multiple universes, it’s essential to have some
                transport.
              </p>
              <p className="mb-8">
                Join us as we introduce the first bubble of the Imaginary World.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldPhaseOne;
