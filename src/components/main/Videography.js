import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

const elementVariants = {
  visible: { opacity: 1, scale: 1, y: ["0px", "100px", "-30px", "0px"], transition: { duration: 0.5 } },
  hidden: {}
};

export default function Videography() {

  const textBoxControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      textBoxControls.start("visible");
    } else {
      textBoxControls.start("hidden");
    }
  }, [textBoxControls, inView]);

  return (
    <motion.div id='skills' className='h-screen flex items-end justify-end bg-[#181d1a] border-b border-[#36453c] rounded-2xl'>
      {/* Little Video  */}
      <div className="hidden xl:flex w-3/4 h-full items-center justify-center">
        <motion.video autoPlay muted loop className="w-3/5 h-auto mr-24 border border-[#36453c] rounded-2xl" whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}>
          <source src="dancinNatalie.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* About Title */}
      <div className="h-screen xl:w-1/3 2xl:w-1/3 hidden xl:inline-block align-baseline mr-20 items-center content-center">
        <div className='h-full w-full xl:flex-auto items-center content-center mt-20'>

          <div className="mx-auto float-right w-2/3 mb-30 text-[3vw] mr-8 text-stone-400">Videography</div>
          <motion.div className="w-3/5 mb-10 border-t-[8px] border-t-[solid] border-t-stone-400 rounded-[5px] float-right mr-20" whileHover={{width: "65%", transition: {duration: 0.2}}}></motion.div>
          {/* Videography text box */}
          <motion.div className="hidden bg-[rgba(0,0,0,0)] xl:flex xl:w-full xl:mr-[10vh] 2xl:w-5/6 2xl:mr-[20vh] text-stone-400 text-[15px] border-[#36453c] rounded-2xl border-y-[1px] p-10 2xl:text-[20px]" whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}
            ref={ref}
            animate={textBoxControls}
            initial="hidden"
            variants={elementVariants}
          >
            <div className="xl:text-[0.9vw] 2xl:text-[0.8vw]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ligula mattis, interdum erat non, malesuada turpis. Fusce ut gravida diam. Aliquam venenatis sapien dolor, vitae interdum purus mollis eu.
              </p>
              <br></br>
              <p>
                Suspendisse euismod sodales turpis, eu imperdiet nisl semper id. Etiam ornare diam ut elit varius scelerisque. Pellentesque non vestibulum massa. 
              </p>
              <br></br>
              <p>
                Pellentesque sed turpis sed felis porta venenatis ut imperdiet nisl. Duis et viverra nibh. Maecenas eu enim pharetra, suscipit nisi in, mollis odio. 
              </p>
            </div>
          </motion.div>
        </div>
      </div>


      <div className="text-white block xl:hidden ml-12 mr-12 border-[#36453c] border-y-[1px] p-10">
        <div className=" text-[6vh] text-white">About Me</div>
        <div className="w-[30vh] border-t-[8px] border-t-[solid] border-t-[white] rounded-[5px]"></div>
        <p>
          <br></br>
          Hi, My name's Will. I'm currently studying at Carleton University in the Computer Science B.C.S Honours program, and I am a dedicated and enthusiastic learner. I have always had a passion for acquiring knowledge and pushing myself to new heights, and I am proud to say that I have become quite proficient in this pursuit.
          <br></br>
          <br></br>
          One of my greatest strengths is my aptitude for coding. I have mastered several programming languages, including C++, C, JavaScript, Java, and Python, and I am always eager to expand my skill set even further. I love exploring new technologies and discovering innovative ways to solve complex problems through coding.
        </p>
      </div>

    </motion.div>

  )
}
