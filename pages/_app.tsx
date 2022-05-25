import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ViewportProvider } from '../src/context/ViewportContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import '../src/assets/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ViewportProvider>
      <div className="page-container">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </ViewportProvider>
  );
}

export default MyApp;
