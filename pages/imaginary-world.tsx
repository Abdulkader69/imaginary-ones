import type { NextPage } from 'next';
import Head from 'next/head';
import WorldBannerVideo from '../src/components/WorldBannerVideo';
import WorldHeadline from '../src/components/WorldHeadline';
import WorldPhaseOne from '../src/components/WorldPhaseOne';
import WorldPhaseTwo from '../src/components/WorldPhaseTwo';
import WorldPhaseThree from '../src/components/WorldPhaseThree';
import WorldPhaseFour from '../src/components/WorldPhaseFour';
import WorldPhaseFive from '../src/components/WorldPhaseFive';
import RevealAnimation from '../src/components/RevealAnimation';

const ImaginaryWorld: NextPage = () => {
  return (
    <div className="page-container">
      
      <RevealAnimation />

      <Head>
        <title>Imaginary Ones - Imaginary World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WorldBannerVideo />
      <WorldHeadline />
      <WorldPhaseOne />
      <WorldPhaseTwo />
      <WorldPhaseThree />
      <WorldPhaseFour />
      <WorldPhaseFive />
    </div>
  );
};

export default ImaginaryWorld;
