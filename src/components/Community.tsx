import BallBeige from '../assets/images/ball-beige.png';
import BallPurple from '../assets/images/ball-purple.png';

const Community = () => {
  return (
    <>
      <div className="relative bg-[#8459ff] overflow-hidden py-44">
        <div className="w-full max-w-[1470px] px-7 m-auto z-10">
          <h2 className="join-title text-[9.5rem] text-white font-filson font-extrabold leading-[1] uppercase">
            join the <br />{' '}
            <span className="text-[#fd0] relative">
              Community <i className="hat"></i>
            </span>
          </h2>
          <div className="text my-8 text-2xl leading-[1.4] text-white/80 font-light">
            <p>
              We can&apos;t reply to all emails but all good vibes are
              appreciated!
              <br />
              You can email us at{' '}
              <a
                className="text-white transition ease-in hover:opacity-60"
                href="mailto:hello@imaginaryones.com"
              >
                hello@imaginaryones.com
              </a>
            </p>
          </div>
          <ul className="social flex items-center justify-start mt-16">
            <li className="item border-r border-solid border-white pr-4 mr-4 text-2xl text-white/80 leading-5 transition ease-in hover:opacity-60 font-light">
              <a href="https://opensea.io/collection/io-imaginary-ones">
                <span>Opensea</span>
              </a>
            </li>
            <li className="item border-r border-solid border-white pr-4 mr-4 text-2xl text-white/80 leading-5 transition ease-in hover:opacity-60 font-light">
              <a href="https://foundation.app/collection/imaginary-ones">
                <span>Foundation</span>
              </a>
            </li>
            <li className="item border-r border-solid border-white pr-4 mr-4 text-2xl text-white/80 leading-5 transition ease-in hover:opacity-60 font-light">
              <a href="https://discord.gg/io-imaginary-ones">
                <span>Discord</span>
              </a>
            </li>
            <li className="item border-r border-solid border-white pr-4 mr-4 text-2xl text-white/80 leading-5 transition ease-in hover:opacity-60 font-light">
              <a href="https://twitter.com/imaginary_ones">
                <span>Twitter</span>
              </a>
            </li>
            <li className="item border-r border-solid border-white pr-4 mr-4 text-2xl text-white/80 leading-5 transition ease-in hover:opacity-60 font-light">
              <a href="https://www.instagram.com/theimaginaryones/">
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="why-item floating absolute top-0 left-0 w-full h-full duration1">
          <div className="absolute top-0 -left-[150px]">
            <img src={BallBeige.src} alt="BallPink" />
          </div>
        </div>
        <div className="why-item floating absolute top-0 left-0 w-full h-full duration2">
          <div className="absolute w-[540px] -right-[150px] -bottom-[150px]">
            <img
              src={BallPurple.src}
              alt="BallLightGreen"
              className="w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="collection-marquee relative overflow-auto py-5 w-full bg-white">
        <div className="inner w-fit flex relative animation-marquee">
          <span className="text-base font-filson font-extrabold px-2 text-black whitespace-nowrap uppercase w-[16.25rem] will-change-transform txt-shadow animation-marquee">
            Imaginary Ones Collection ∙ &nbsp;
          </span>
        </div>
      </div>
    </>
  );
};

export default Community;
