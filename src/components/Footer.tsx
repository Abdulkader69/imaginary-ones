import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <>
      <div className="main-footer bg-black py-5 relative">
        <div className="w-full ma-w-[1800px] m-auto px-7 flex items-center justify-between">
          <div className="absolute right-7 -top-[170px] z-20">
            <Link
              to="first-section"
              spy={true}
              smooth={true}
              duration={500}
              className="arrow w-14 h-14 m-auto bg-black rounded-full shadow-arrow flex items-center justify-center rotate-180 pt-1 cursor-pointer"
            >
              {' '}
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                className="w-10 h-10 bounce -mt-1"
              >
                <path
                  fill="white"
                  d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z"
                />
              </svg>{' '}
            </Link>
          </div>
          <div className="text text-white text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved, Imaginary
            Ones Pte Ltd <br /> <a href="">Terms & Conditions</a>
          </div>
          <div className="logo">
            <Link to="/">
              <a>
                <svg
                  className="w-[140px] h-auto"
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
        </div>
      </div>
    </>
  );
};

export default Footer;
