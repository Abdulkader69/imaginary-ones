const TeamItem = ({
  Heading,
  HeadingBg,
  VideoPoster,
  Video,
  Name,
  SubName,
  Paragraph,
  Twitter,
  LinkedIn,
}: {
  Heading: string;
  HeadingBg: string;
  VideoPoster: string;
  Video: string;
  Name: string;
  SubName: string;
  Paragraph: string;
  Twitter: string;
  LinkedIn: string;
}) => {
  return (
    <div className="w-1/3 p-12">
      <div className="team rounded-2xl shadow-arrow bg-white text-black overflow-hidden">
        <div
          className={`head py-10 px-4 text-[1.7rem] font-filson font-extrabold text-white uppercase leading-[1] text-center ${HeadingBg}`}
        >
          {Heading}
        </div>
        <div className="p-4">
          <div className="video w-full max-w-[220px] m-auto py-4">
            <video autoPlay loop muted playsInline poster={VideoPoster}>
              <source data-src={Video} src={Video} />
            </video>
          </div>
          <h2 className="font-filson text-4xl font-bold text-black mb-3 uppercase text-center">
            {Name}
          </h2>
          <h3 className="font-filson text-xl font-normal text-black mb-5 uppercase text-center">
            {SubName}
          </h3>
          <p className="text-xl font-normal text-black/60 mb-2 uppercase text-center w-full max-w-[80%] m-auto">
            {Paragraph}
          </p>
        </div>
        <div className="link flex items-center justify-center pb-8">
          <a className="twitter p-2 inline-block relative group" href={Twitter}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 310 310"
              className="w-7 h-7 transition ease-in group-hover:-translate-y-2"
            >
              <path
                id="XMLID_827_"
                d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
C307.394,57.037,305.009,56.486,302.973,57.388z"
              />
            </svg>
          </a>
          <a
            className="linkedin p-2 inline-block relative group"
            href={LinkedIn}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 504.4 504.4"
              className="w-7 h-7 transition ease-in group-hover:-translate-y-2"
            >
              <path
                d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
  C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
  c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
  c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
