import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/router';

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [musicOnOff, setMusicOnOff] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const router = useRouter();

  const handleMenuRoute = (route: string) => {
    setShowMenu(false);
    router.push(route);
  };

  return (
    <>
      <header
        id="main-header"
        className={`py-4 fixed top-0 left-0 w-full z-50`}
      >
        <div
          className={`bg absolute top-0 left-0 w-full h-full bg-black z-[-1] transition ease-in ${
            scroll ? 'translate-y-0' : '-translate-y-full'
          }`}
        ></div>
        <div className="w-full max-w-[1800px] mx-auto px-7 flex items-center justify-between">
          <div className="logo w-full max-w-[140px]">
            <Link href="/">
              <a>
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1016 475"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M162.364 447.795C250.372 447.795 307.114 384.105 307.114 308.449C307.114 232.793 250.372 169.103 162.364 169.103C74.742 169.103 18 232.793 18 308.449C18 384.105 74.742 447.795 162.364 447.795ZM162.364 386.421C117.974 386.421 89.024 351.295 89.024 308.449C89.024 265.603 117.974 230.477 162.364 230.477C207.14 230.477 235.704 265.603 235.704 308.449C235.704 351.295 207.14 386.421 162.364 386.421Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M349.092 443.549H378.428C391.552 443.549 399.272 436.215 399.272 422.705V297.641L494.228 430.425C500.404 439.303 508.124 443.549 519.318 443.549H537.074C550.584 443.549 557.918 436.215 557.918 422.705V194.193C557.918 180.683 550.584 173.349 537.074 173.349H507.738C494.228 173.349 486.894 180.683 486.894 194.193V317.327L392.71 186.473C386.148 177.595 378.428 173.349 367.234 173.349H349.092C335.582 173.349 328.248 180.683 328.248 194.193V422.705C328.248 436.215 335.582 443.549 349.092 443.549Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M756.546 233.951C770.056 233.951 777.39 226.617 777.39 213.107V194.193C777.39 180.683 770.056 173.349 756.546 173.349H610.638C597.128 173.349 589.794 180.683 589.794 194.193V422.705C589.794 436.215 597.128 443.549 610.638 443.549H756.546C770.056 443.549 777.39 436.215 777.39 422.705V403.791C777.39 390.281 770.056 382.947 756.546 382.947H660.818V336.627H741.106C754.616 336.627 762.336 329.293 762.336 315.783V303.045C762.336 289.535 754.616 282.201 741.106 282.201H660.818V233.951H756.546Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M896.678 447.795C954.964 447.795 1003.21 420.389 1003.21 365.191C1002.44 329.293 982.756 302.273 926.4 282.973L893.976 271.393C873.518 264.059 868.5 255.181 868.5 246.689C868.5 232.021 883.168 224.301 899.38 224.301C912.89 224.301 922.54 229.319 928.33 237.811C936.436 247.847 943.384 252.479 955.35 249.005L973.492 243.987C986.616 240.127 992.792 230.091 985.844 217.353C969.632 186.859 940.296 169.103 898.222 169.103C842.252 169.103 799.02 201.527 799.02 252.093C799.792 301.501 851.902 322.345 874.676 329.679L907.486 341.645C927.558 348.207 934.12 357.857 934.12 367.893C934.12 383.719 919.066 392.597 896.678 392.597C875.834 392.597 860.78 384.491 852.288 371.367C845.34 360.173 838.778 355.155 826.812 357.857L807.512 362.489C794.388 365.577 787.44 374.841 792.458 387.965C807.512 425.407 844.954 447.795 896.678 447.795Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M140.698 294.524C140.698 304.299 135.169 312.224 128.349 312.224C121.529 312.224 116 304.299 116 294.524C116 284.748 121.529 276.823 128.349 276.823C135.169 276.823 140.698 284.748 140.698 294.524Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M208 294.524C208 304.299 202.471 312.224 195.651 312.224C188.831 312.224 183.302 304.299 183.302 294.524C183.302 284.748 188.831 276.823 195.651 276.823C202.471 276.823 208 284.748 208 294.524Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M810.632 100.376L839.551 141.136C841.956 144.525 845.855 146.54 850.011 146.54H867.906C872.8 146.54 875.534 140.892 872.499 137.053L846.732 104.813C845.893 103.763 846.311 102.201 847.529 101.632C861.207 95.249 868.046 83.448 868.046 66.38C868.046 53.3183 863.41 42.5826 855.208 36.1413C847.363 30.0578 835.952 27.1949 820.261 27.1949H798.747C789.358 27.1949 781.747 34.8061 781.747 44.1949V139.54C781.747 143.406 784.881 146.54 788.747 146.54H803.632C807.498 146.54 810.632 143.406 810.632 139.54V100.376ZM810.632 84.0938V50.9922H821.687C832.029 50.9922 838.804 57.6125 838.804 67.6325C838.804 78.0103 831.851 84.0938 819.904 84.0938H810.632Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M87.0702 145.528H99.7187C105.53 145.528 108.949 142.451 109.462 136.811L114.077 81.4309L135.955 136.982C137.835 142.11 141.254 144.332 146.552 144.332H151.851C157.15 144.332 160.568 142.11 162.449 136.982L184.327 81.4309L188.942 136.811C189.284 142.451 192.702 145.528 198.514 145.528H211.333C217.487 145.528 220.734 142.11 220.05 135.785L210.65 34.5973C210.308 28.9568 206.889 25.8801 201.249 25.8801H187.062C181.763 25.8801 178.516 28.1022 176.464 33.059L149.116 100.404L121.939 33.059C119.888 28.1022 116.47 25.8801 111.342 25.8801H97.1549C91.3434 25.8801 88.0958 28.9568 87.583 34.5973L78.1821 135.785C77.6693 142.11 80.9169 145.528 87.0702 145.528Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M239.173 145.528H252.334C257.633 145.528 261.051 143.135 262.761 138.178L267.888 124.333H308.91L314.209 138.349C316.089 143.135 319.679 145.528 324.807 145.528H338.652C345.489 145.528 348.223 141.255 345.83 134.931L305.834 33.059C303.954 28.2731 300.535 25.8801 295.236 25.8801H281.904C276.605 25.8801 273.016 28.2731 271.136 33.059L231.994 134.931C229.43 141.255 232.336 145.528 239.173 145.528ZM273.358 99.72L288.57 58.6978L303.099 99.72H273.358Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M415.674 147.408C431.228 147.408 445.586 142.281 457.892 133.051C461.824 130.145 463.191 126.555 463.191 121.77V87.4134C463.191 81.431 459.943 78.1834 453.961 78.1834H415.844C409.862 78.1834 406.615 81.431 406.615 87.4134V91.8575C406.615 97.8399 409.862 101.088 415.844 101.088H433.45V116.984C428.493 119.206 421.314 120.231 415.844 120.231C394.137 120.231 381.147 104.506 381.147 85.7042C381.147 66.3896 395.163 51.1772 415.332 51.1772C420.972 51.1772 426.955 51.519 433.963 54.9375C439.261 57.1596 443.193 56.8177 446.782 52.5446L452.252 45.8785C456.012 41.0926 455.67 36.3066 450.371 33.059C440.287 27.0767 429.177 24 415.332 24C376.361 24 349.696 52.2027 349.696 85.7042C349.696 119.206 376.019 147.408 415.674 147.408Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M546.37 145.528H559.361C565.172 145.528 568.591 142.281 568.591 136.298V80.9181L610.638 139.717C613.373 143.648 616.792 145.528 621.748 145.528H629.611C635.594 145.528 638.841 142.281 638.841 136.298V35.1101C638.841 29.1277 635.594 25.8801 629.611 25.8801H616.621C610.638 25.8801 607.391 29.1277 607.391 35.1101V89.6353L565.685 31.6916C562.779 27.7603 559.361 25.8801 554.404 25.8801H546.37C540.388 25.8801 537.14 29.1277 537.14 35.1101V136.298C537.14 142.281 540.388 145.528 546.37 145.528Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M660.141 145.528H673.302C678.601 145.528 682.019 143.135 683.729 138.178L688.856 124.333H729.879L735.177 138.349C737.057 143.135 740.647 145.528 745.775 145.528H759.62C766.457 145.528 769.191 141.255 766.798 134.931L726.802 33.059C724.922 28.2731 721.503 25.8801 716.204 25.8801H702.872C697.574 25.8801 693.984 28.2731 692.104 33.059L652.962 134.931C650.398 141.255 653.304 145.528 660.141 145.528ZM694.326 99.72L709.538 58.6978L724.067 99.72H694.326Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M929.402 145.528H942.393C948.375 145.528 951.623 142.281 951.623 136.298V96.6433L992.816 37.1612C997.26 30.837 994.696 25.8801 987.175 25.8801H970.766C965.81 25.8801 962.22 27.7603 959.656 32.0334L935.898 70.4917L912.31 32.0334C909.575 27.7603 906.156 25.8801 901.2 25.8801H884.62C877.099 25.8801 874.364 30.837 878.637 37.1612L920.172 97.1561V136.298C920.172 142.281 923.42 145.528 929.402 145.528Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M27 41.9344C27 33.13 34.1374 25.9927 42.9418 25.9927C51.7462 25.9927 58.8836 33.13 58.8836 41.9344V129.614C58.8836 138.419 51.7462 145.556 42.9418 145.556C34.1374 145.556 27 138.419 27 129.614V41.9344Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M483 41.5493C483 32.7128 490.163 25.5493 499 25.5493C507.837 25.5493 515 32.7128 515 41.5493V129.549C515 138.386 507.837 145.549 499 145.549C490.163 145.549 483 138.386 483 129.549V41.5493Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div className="menu-wrap flex items-center">
            <div
              className="music-bar h-8 w-8 flex items-center justify-center cursor-pointer"
              onClick={() => setMusicOnOff((prevMode) => !prevMode)}
            >
              {musicOnOff ? (
                <>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    id="mute"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      id="Rectangle_3"
                      data-name="Rectangle 3"
                      width="24"
                      height="24"
                      fill="none"
                    />
                    <path
                      id="Rectangle"
                      d="M0,3.518H3.278A7.4,7.4,0,0,1,10,0V18a7.7,7.7,0,0,1-6.722-3.518H0Z"
                      transform="translate(3 3)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Oval"
                      d="M0,9.9A6.978,6.978,0,0,0,2.05,4.95,6.978,6.978,0,0,0,0,0"
                      transform="translate(15.95 7.05)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Oval-2"
                      data-name="Oval"
                      d="M0,15.556A10.966,10.966,0,0,0,3.222,7.778,10.966,10.966,0,0,0,0,0"
                      transform="translate(18.778 4.222)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Line"
                      d="M2.621,0,0,26.551"
                      transform="translate(1.519 3.527) rotate(-45)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <p className="bars block relative w-6 h-6 z-10">
                    <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                    <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                    <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                    <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                    <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                  </p>
                  <ReactAudioPlayer
                    src="/audios/ImaginaryOnes.mp3"
                    autoPlay
                    controls
                    className="absolute opacity-0 invisible"
                  />
                </>
              )}
            </div>
            <div
              className={`nav-bar relative z-10 cursor-pointer h-14 w-14 rounded-full ml-5 flex items-center justify-center transition ease-in ${
                scroll ? 'bg-white' : 'bg-black'
              }`}
              onClick={() => setShowMenu((prevMode) => !prevMode)}
            >
              <div className="inner">
                <span
                  className={`block w-6 h-[2px] mb-1 transition ease-in ${
                    scroll ? 'bg-black' : 'bg-white'
                  }`}
                ></span>
                <span
                  className={`block w-6 h-[2px] mb-1 transition ease-in ${
                    scroll ? 'bg-black' : 'bg-white'
                  }`}
                ></span>
                <span
                  className={`block w-6 h-[2px] transition ease-in ${
                    scroll ? 'bg-black' : 'bg-white'
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`menu-wrapper fixed top-0 left-0 w-full h-full z-[60] ${
          showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="overlay absolute w-full h-full bg-[#333] opacity-[0.46] z-10"></div>
        <div
          className="w-[calc(100%-600px)] h-full relative z-20"
          onClick={() => setShowMenu((prevMode) => !prevMode)}
        ></div>
        <div
          className={`side-bar w-[600px] overflow-hidden overflow-y-auto absolute right-0 top-0 h-full bg-[#8459ff] p-7 z-20 transition ease-in-out ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="inner relative h-full">
            <div className="head w-full flex items-center justify-end pb-[12vh]">
              <div
                className="music-bar h-8 w-8 flex items-center justify-center cursor-pointer"
                onClick={() => setMusicOnOff((prevMode) => !prevMode)}
              >
                {musicOnOff ? (
                  <>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="mute"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="Rectangle_3"
                        data-name="Rectangle 3"
                        width="24"
                        height="24"
                        fill="none"
                      />
                      <path
                        id="Rectangle"
                        d="M0,3.518H3.278A7.4,7.4,0,0,1,10,0V18a7.7,7.7,0,0,1-6.722-3.518H0Z"
                        transform="translate(3 3)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Oval"
                        d="M0,9.9A6.978,6.978,0,0,0,2.05,4.95,6.978,6.978,0,0,0,0,0"
                        transform="translate(15.95 7.05)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Oval-2"
                        data-name="Oval"
                        d="M0,15.556A10.966,10.966,0,0,0,3.222,7.778,10.966,10.966,0,0,0,0,0"
                        transform="translate(18.778 4.222)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Line"
                        d="M2.621,0,0,26.551"
                        transform="translate(1.519 3.527) rotate(-45)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <p className="bars block relative w-6 h-6 z-10">
                      <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                      <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                      <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                      <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                      <span className="block bg-white bottom-[1px] h-[3px] absolute w-[4px] animation-sound"></span>
                    </p>
                    <ReactAudioPlayer
                      src="/audios/ImaginaryOnes.mp3"
                      autoPlay
                      controls
                      className="absolute opacity-0 invisible"
                    />
                  </>
                )}
              </div>
              <div
                className={`nav-bar relative z-10 cursor-pointer h-8 w-8 rounded-full ml-5 flex items-center justify-center transition ease-in`}
                onClick={() => setShowMenu((prevMode) => !prevMode)}
              >
                <div className="inner">
                  <span
                    className={`block w-6 h-[2px] bg-white relative rotate-45 top-[2px]`}
                  ></span>
                  <span
                    className={`block w-6 h-[2px] bg-white relative -rotate-45`}
                  ></span>
                </div>
              </div>
            </div>
            <ul className="main-nav pb-16">
              <li
                className={`relative overflow-hidden rounded-full mb-2 py-1 px-6 w-max text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/' ? 'text-black active' : 'text-white'
                }`}
              >
                <span className="bg absolute top-0 left-0 w-full h-full bg-[#fd0] -z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0"></span>
                <span className="text leading-3 relative top-1 transition ease-in group-hover:text-black">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuRoute('/');
                    }}
                  >
                    home
                  </a>
                </span>
              </li>
              <li
                className={`relative overflow-hidden rounded-full mb-2 py-1 px-6 w-max text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/imaginary-world'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg absolute top-0 left-0 w-full h-full bg-[#fd0] -z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0"></span>
                <span className="text leading-3 relative top-1 transition ease-in group-hover:text-black">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/imaginary-world"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuRoute('/imaginary-world');
                    }}
                  >
                    Imaginary World
                  </a>
                </span>
              </li>
              <li
                className={`coming-soon relative overflow-hidden rounded-full mb-2 py-1 px-6 text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/imaginary'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg flex items-center w-max px-6 pt-[6px] absolute top-0 left-0 h-full bg-white rounded-full text-black z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0">
                  Coming Soon
                </span>
                <span className="text leading-3 relative opacity-20 top-1 transition ease-in group-hover:text-black">
                  <Link href="/">pfp tool</Link>
                </span>
              </li>
              <li
                className={`relative overflow-hidden rounded-full mb-2 py-1 px-6 w-max text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/careers'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg absolute top-0 left-0 w-full h-full bg-[#fd0] -z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0"></span>
                <span className="text leading-3 relative top-1 transition ease-in group-hover:text-black">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/careers"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuRoute('/careers');
                    }}
                  >
                    Careers
                  </a>
                </span>
              </li>
              <li
                className={`coming-soon relative overflow-hidden rounded-full mb-2 py-1 px-6 text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/imaginary'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg flex items-center w-max px-6 pt-[6px] absolute top-0 left-0 h-full bg-white rounded-full text-black z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0">
                  Coming Soon
                </span>
                <span className="text leading-3 relative opacity-20 top-1 transition ease-in group-hover:text-black">
                  <Link href="/">gallery</Link>
                </span>
              </li>
              <li
                className={`coming-soon relative overflow-hidden rounded-full mb-2 py-1 px-6 text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/imaginary'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg flex items-center w-max px-6 pt-[6px] absolute top-0 left-0 h-full bg-white rounded-full text-black z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0">
                  Coming Soon
                </span>
                <span className="text leading-3 relative opacity-20 top-1 transition ease-in group-hover:text-black">
                  <Link href="/">events</Link>
                </span>
              </li>
              <li
                className={`coming-soon relative overflow-hidden rounded-full mb-2 py-1 px-6 text-[2.75rem] font-filson font-semibold uppercase group ${
                  router.pathname == '/imaginary'
                    ? 'text-black active'
                    : 'text-white'
                }`}
              >
                <span className="bg flex items-center w-max px-6 pt-[6px] absolute top-0 left-0 h-full bg-white rounded-full text-black z-10 transition ease-in translate-y-[110%] group-hover:translate-y-0">
                  Coming Soon
                </span>
                <span className="text leading-3 relative opacity-20 top-1 transition ease-in group-hover:text-black">
                  <Link href="/">fan art</Link>
                </span>
              </li>
            </ul>
            <div className="footer-social flex items-center justify-start px-6">
              <Link href="/">
                <a className="mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fill="#8459ff"
                      d="M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z"
                    />
                    <path
                      fill="#fff"
                      d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                    />
                    <path
                      fill="#fff"
                      d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="mr-8">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="white"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="mr-8">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 310 310"
                    width="30"
                    height="30"
                  >
                    <path
                      fill="white"
                      d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="mr-8">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 239.04 239.04"
                    width="30"
                    height="30"
                  >
                    <path
                      fill="white"
                      d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                    />
                    <path
                      d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      fill="#8459ff"
                    />
                    <path
                      fill="white"
                      d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                    />
                    <path
                      fill="white"
                      d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                    />
                    <path
                      d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      fill="#8459ff"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
