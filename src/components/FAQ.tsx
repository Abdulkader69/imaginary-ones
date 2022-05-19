import { Disclosure, Transition } from '@headlessui/react';

const FAQ = () => {
  return (
    <div className="faq-section py-52">
      <div className="team-container w-full max-w-[1100px] m-auto px-7">
        <h2 className="text-[136px] text-[rgb(132,89,255)] leading-[1] font-filson uppercase font-extrabold mb-12">
          FAQ
        </h2>
        <Disclosure>
          {({ open }) => (
            <div className="py-10 border-t border-b border-solid border-black/20">
              <Disclosure.Button className="py-4 px-6 text-2xl font-filson font-bold text-black flex justify-between items-center w-full">
                <span>Who&rsquo;s the team behind imaginary ones?</span>
                <div className="btn h-[20px] w-[20px]">
                  <div className="h-[2px] w-[20px] bg-black relative top-[9px]"></div>
                  <div
                    className={`h-[1px] w-[20px] bg-black relative top-2 transition ease-in ${
                      open ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'
                    }`}
                  ></div>
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
              >
                <Disclosure.Panel static>
                  <div className="py-4 px-6 text-xl text-black/70 leading-[1.4] font-filson">
                    <p className="mb-4">
                      We have been entrepreneurs and 3D motion artists for over
                      a decade. Our notable clients are Nike, Apple, Samsung,
                      Heineken, Spotify, and L&rsquo;oreal.
                    </p>
                    <p>
                      You can find OFFSET&rsquo;s portfolio{' '}
                      <a
                        className="text-[#8459ff] underline transition ease-in hover:opacity-80"
                        href="https://offset.sg/"
                      >
                        here.
                      </a>
                      <br /> You can visit OFFEO&rsquo;s website{' '}
                      <a
                        className="text-[#8459ff] underline transition ease-in hover:opacity-80"
                        href="https://offset.sg/"
                      >
                        here.
                      </a>
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="py-10 border-t border-b border-solid border-black/20">
              <Disclosure.Button className="py-4 px-6 text-2xl font-filson font-bold text-black flex justify-between items-center w-full">
                <span>What makes imaginary ones so unique?</span>
                <div className="btn h-[20px] w-[20px]">
                  <div className="h-[2px] w-[20px] bg-black relative top-[9px]"></div>
                  <div
                    className={`h-[1px] w-[20px] bg-black relative top-2 transition ease-in ${
                      open ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'
                    }`}
                  ></div>
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
              >
                <Disclosure.Panel static>
                  <div className="py-4 px-6 text-xl text-black/70 leading-[1.4] font-filson">
                    <p className="mb-4">
                      Imaginary Ones is the brainchild of an award-winning
                      creative director, Clement (Cmttat). We have positioned
                      our brand and design to appeal to people of all ages.
                    </p>
                    <p>
                      Holders can expect more collections with excellent quality
                      and long-term utility in the Imaginary World ecosystem.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQ;
