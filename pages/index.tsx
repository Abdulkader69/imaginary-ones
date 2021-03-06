import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import BannerVideo from '../src/components/BannerVideo';
import Characters from '../src/components/Characters';
import ImaginaryValues from '../src/components/ImaginaryValues';
import Why from '../src/components/Why';
import ImaginaryTeam from '../src/components/ImaginaryTeam';
import FAQ from '../src/components/FAQ';
import Community from '../src/components/Community';
import Good from '../src/components/Good';
import What from '../src/components/What';
import RevealAnimation from '../src/components/RevealAnimation';
import ParallaxBanner from '../src/components/ParallaxBanner';

const Home: NextPage = () => {
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
      <Head>
        <title>Imaginary Ones</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {explore ? (
        <>
          <RevealAnimation />
          <BannerVideo />
          <What />
          <Good />
          <Why />
          <Characters />
          <ImaginaryValues />
          <ImaginaryTeam />
          <FAQ />
          <Community />
        </>
      ) : (
        <>
          <ParallaxBanner loading={loading} setExplore={setExplore} />
        </>
      )}
    </div>
  );
};

export default Home;
