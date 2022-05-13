import WebReelIMG from '../assets/images/webreel-mobile.jpg';
import WebReelVideo from '../assets/videos/webreel-mobile.mp4';

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
      </div>
    </>
  );
};

export default Good;
