import '../src/assets/styles//globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
