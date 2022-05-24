import '../src/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ParallaxBanner from '../src/components/ParallaxBanner';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [explore, setExplore] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="page-container">
        {explore ? (
          <>
            <Header />
            <Component key={router.route} {...pageProps} />
            <Footer />
          </>
        ) : (
          <>
            <ParallaxBanner loading={loading} setExplore={setExplore} />
          </>
        )}
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
