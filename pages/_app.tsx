import type { AppProps } from 'next/app';
// import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ViewportProvider } from '../src/context/ViewportContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
// import ParallaxBanner from '../src/components/ParallaxBanner';

import '../src/assets/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [explore, setExplore] = useState<boolean>(false);
  const router = useRouter();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <ViewportProvider>
      <div className="page-container">
        {/* {explore ? (
          <> */}
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <Footer />
        {/* </>
        ) : (
          <>
            <ParallaxBanner loading={loading} setExplore={setExplore} />
          </>
        )} */}
      </div>
    </ViewportProvider>
  );
}

export default MyApp;
