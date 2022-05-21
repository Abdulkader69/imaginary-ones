import '../src/assets/styles//globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ParallaxBanner from '../src/components/ParallaxBanner';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [explore, setExplore] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="page-container">
      {explore ? (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <>
          <ParallaxBanner loading={loading} setExplore={setExplore} />
        </>
      )}
    </div>
  );
}

export default MyApp;
