import cmtImg from '../assets/images/dream-big.jpg';
import cmtVideo from '../assets/videos/cmt.mp4';
import davidImg from '../assets/images/dream-big.jpg';
import davidVideo from '../assets/videos/david.mp4';
import gregImg from '../assets/images/dream-big.jpg';
import gregVideo from '../assets/videos/greg.mp4';
import calebImg from '../assets/images/dream-big.jpg';
import calebVideo from '../assets/videos/caleb.mp4';
import jeromeImg from '../assets/images/dream-big.jpg';
import jeromeVideo from '../assets/videos/jerome.mp4';
import TeamItem from './TeamItem';

const ImaginaryTeam = () => {
  return (
    <div className="imaginary-team-wrapper bg-[#fbf2ff] overflow-hidden relative pb-20 lg:pb-40 2xl:pb-52">
      <div className="team-container w-full max-w-[1740px] m-auto px-7">
        <h2 className="text-center text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-[rgb(132,89,255)] pb-12 pt-20 lg:pt-32 leading-[1] font-filson uppercase font-extrabold">
          <span className="text-[#fd0]">Imaginary</span> Team
        </h2>
        <div className="flex flex-wrap justify-center">
          <TeamItem
            Heading={'creator'}
            HeadingBg={'bg-[#ff9d9d]'}
            VideoPoster={cmtImg.src}
            Video={cmtVideo}
            Name={'CMTTAT'}
            SubName={'CLEMENT'}
            Paragraph={'CO-FOUNDER OF IMAGINARY ONES, OFFSET & OFFEO'}
            Twitter={'https://twitter.com/cmttat'}
            LinkedIn={'https://www.linkedin.com/in/cmttat'}
          />
          <TeamItem
            Heading={'BIZ / STRATEGIST'}
            HeadingBg={'bg-[#6659ff]'}
            VideoPoster={davidImg.src}
            Video={davidVideo}
            Name={'GENTLE WHALE'}
            SubName={'DAVID'}
            Paragraph={'CO-FOUNDER OF IMAGINARY ONES, OFFSET & OFFEO'}
            Twitter={'https://twitter.com/heygentlewhale'}
            LinkedIn={'https://www.linkedin.com/in/davidleeoff'}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <TeamItem
            Heading={'ARTIST / PARTNERSHIPS'}
            HeadingBg={'bg-[#fd0]'}
            VideoPoster={gregImg.src}
            Video={gregVideo}
            Name={'NINE FOOT TABLE'}
            SubName={'GREGORY'}
            Paragraph={'MANAGING PARTNER OF IMAGINARY ONES, OFFSET & OFFEO'}
            Twitter={'https://twitter.com/NineFootTable'}
            LinkedIn={'https://www.linkedin.com/in/gregpoon'}
          />
          <TeamItem
            Heading={'PM / COMMUNITY'}
            HeadingBg={'bg-[#67d186]'}
            VideoPoster={calebImg.src}
            Video={calebVideo}
            Name={'KBBY'}
            SubName={'CALEB'}
            Paragraph={'OPERATIONS DIRECTOR OF IMAGINARY ONES, OFFSET & OFFEO'}
            Twitter={'https://twitter.com/kbbyhoon'}
            LinkedIn={'https://www.linkedin.com/in/caleb-hoon'}
          />
          <TeamItem
            Heading={'TECH / CONTRACTS'}
            HeadingBg={'bg-[#aa8cff]'}
            VideoPoster={jeromeImg.src}
            Video={jeromeVideo}
            Name={'MIGHTY MOUSEY'}
            SubName={'JEROME'}
            Paragraph={'CHIEF TECH OFFICER OF IMAGINARY ONES, OFFSET & OFFEO'}
            Twitter={'https://twitter.com/MightyMouseyIO'}
            LinkedIn={'https://www.linkedin.com/in/jeromekwek'}
          />
        </div>
      </div>
    </div>
  );
};

export default ImaginaryTeam;
