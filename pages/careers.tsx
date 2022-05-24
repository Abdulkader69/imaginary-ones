import type { NextPage } from 'next';
import Head from 'next/head';
import { Link } from 'react-scroll';
import BannerImage from '../src/assets/images/careers-desktop.jpg';
import RevealAnimation from '../src/components/RevealAnimation';

const Careers: NextPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Imaginary Ones - Careers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RevealAnimation />

      <main className="v-main">
        <div className="v-main__wrap">
          <div className="wrapper">
            <section
              id="home-banner"
              className="main-banner careers-banner h-screen bg-[#fff2f2] flex justify-center content-center items-center overflow-hidden relative top-0 left-0 w-full p-0"
            >
              <img
                src={BannerImage.src}
                alt="Careers"
                className="m-auto absolute object-cover w-full h-full left-0 top-0 block leading-[0] outline-0 ease-in-out scale-105 opacity-100"
              />
              <div className="main-banner__content relative z-[2] w-full">
                <div className="container w-full p-3 mx-auto px-[30px] max-w-[1800px]">
                  <h1 className="main-banner__title font-filson text-8xl lg:mb-12 font-black uppercase">
                    <span className="block">Calling all</span>
                    <span className="block text-[#8459ff]">dreamers</span>
                  </h1>
                  <div className="main-banner__text text-black max-w-[600px] text-2xl">
                    <p className="mb-8">
                      We are looking for creative builders, creators, and
                      innovators. If you are one of the crazy ones who imagine a
                      better world and a bright future for the web3. Join us as
                      we build the Imaginary World ecosystem together.
                    </p>
                    <button
                      type="button"
                      className="before:bg-[#8459ff] before:rounded-[inherit] before:bottom-0 before:text-inherit before:content-[''] before:left-0 before:opacity-0 before:pointer-events-none before:absolute before:right-0 before:top-0 before:transition-opacity before:duration-[.2s] hover:before:opacity-[.08] v-btn items-center rounded-3xl inline-flex flex-initial tracking-[.0892857143em] justify-center outline-0 relative no-underline indent-[0.0892857143em] uppercase  transition-[shadow,transform,opacity] duration-[.28ms] ease-in-out select-none align-middle whitespace-nowrap shadow-none font-bold text-white h-[52px] min-w-[92px] text-lg bg-[#8459ff] px-[30px]"
                    >
                      <span className="v-btn__content">View Positions</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="main-banner__buttons absolute left-2/4 bottom-[30px] translate-x-[-50%] text-center select-none">
                        <button type="button" className="button--text text-white text-base font-bold text-center uppercase mb-2 px-4 min-w-[64px] h-9 opacity-100 visible tracking-[.0892857143em]">
                            <span className="v-btn__content"><span>EXPLORE</span></span>
                        </button>
                        <br />
                        <button type="button" className="v-btn items-center rounded-[50%] inline-flex flex-initial tracking-[.0892857143em] justify-center outline-0 relative no-underline indent-[0.0892857143em] uppercase  transition-[shadow,transform,opacity] duration-[.28ms] ease-in-out select-none align-middle whitespace-nowrap shadow-[0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)] w-14 h-14 font-bold text-white text-lg bg-[#272727] px-0 opacity-100 visible">
                            <span className="v-btn__content">
                                {' '}<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="w-10 h-10 bounce -mt-1">
                                    <path fill="white" d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z"/>
                                </svg>{' '}
                            </span>
                        </button>
                    </div> */}
              <Link to="target" spy={true} smooth={true} duration={500}>
                {' '}
                <div className="absolute left-1/2 bottom-8 z-10 -translate-x-1/2 text-center cursor-pointer">
                  <p className="text-base uppercase text-white mb-2 tracking-[2px]">
                    EXPLORE
                  </p>
                  <div className="arrow w-14 h-14 m-auto bg-black rounded-full shadow-arrow flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      className="w-10 h-10 bounce"
                    >
                      <path
                        fill="white"
                        d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z"
                      />
                    </svg>
                  </div>
                </div>{' '}
              </Link>
            </section>
            <section className="job-list overflow-hidden">
              <div id="target"></div>
              <div className="row flex flex-wrap flex-auto m-0">
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/marketing-manager"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      Marketing Manager
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block">
                      Brand / Marketing
                    </span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/copywriter"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      Copywriter
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block">
                      Brand / Marketing
                    </span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/ui-ux-designer"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      UI / UX Designer
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block">
                      Art / Creative
                    </span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/3d-animator-motion-designer"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      3D Animator / Motion Designer
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block">
                      Art / Creative
                    </span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/3d-modeler"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      3D Modeler
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block">
                      Art / Creative
                    </span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-md-6 col-12 basis-3/6 max-w-[50%] p-0">
                  <a
                    href="/careers/more-roles"
                    className="job-list__item group p-[60px] hover:bg-[#8459ff] bg-[#9773ff] block h-full w-full border border-solid border-white transition-colors duration-[.3s] ease-in-out relative text-left no-underline text-white"
                  >
                    <h3 className="job-list__title uppercase font-extrabold font-filson text-[#fd0] leading-[1] text-[32px]">
                      More Roles
                    </h3>
                    <span className="job-list__description my-[.875rem] text-xl leading-[1] uppercase text-white block">
                      full time / freelance
                    </span>
                    <span className="job-list__team opacity-80 leading-[1] uppercase text-white block"></span>
                    <svg
                      className="absolute right-[30px] bottom-[30px] opacity-50 text-white transition-[opacity,transform] duration-[.3s] ease-in-out text-2xl group-hover:translate-x-2.5 group-hover:opacity-100"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Next"
                      data-name="24x24/On Light/Next"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="view-box"
                        width="24"
                        height="24"
                        fill="#ffffff"
                        opacity="0"
                      />
                      <path
                        id="Shape"
                        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
                        transform="translate(4.25 7.25)"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
