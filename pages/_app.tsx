import '../src/assets/styles//globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
