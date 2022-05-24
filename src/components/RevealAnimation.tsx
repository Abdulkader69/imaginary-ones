import { motion } from 'framer-motion';

const RevealAnimation = () => {
  const revealAnimation = {
    hidden: {
      scale: 10,
    },
    visible: {
      scale: 300,
      transition: { ease: 'linear', duration: 1 },
    },
    exit: {
      scale: 3,
      transition: { ease: 'linear', duration: 0.7 },
    },
  };

  return (
    <div className="loading-animation-screen fixed w-full h-full top-0 left-0 z-[100] pointer-events-none">
      <motion.img
        src="/final-5px.svg"
        alt="animated-svg"
        className="rounded-full w-full h-full transform origin-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={revealAnimation}
      />
    </div>
  );
};
export default RevealAnimation;
