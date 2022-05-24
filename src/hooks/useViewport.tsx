import { useContext } from 'react';
import { ViewportContext } from '../context/ViewportContext';

const useViewport = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore: I don't care that it might not be a HTML Canvas Element */

  const { width, height } = useContext(ViewportContext);

  return { width, height };
};
export default useViewport;
