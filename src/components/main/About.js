import { delay, motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

const elementVariants = {
  visible: { 
    opacity: 1, 
    // scale: 1, y: ["0px", "100px", "-30px", "0px"], 
    transition: { duration: 0.3, delay: 0.2 },
  },
  hidden: {
    opacity: 0,
  }
};

export default function About() {

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
    <motion.div id='about' className='h-screen flex bg-[#181d1a] border-b border-[#36453c] rounded-2xl'>
     {/* <motion.div id='about' className='h-screen flex border-b border-[#36453c]' animate={controls} > */}
      {/* <video autoPlay muted loop className="w-full h-auto absolute -z-10">
        <source src="vanLife.mp4" type="video/mp4" />
      </video> */}
      {/* About Title */}
      <motion.div className="h-screen xl:w-1/3 2xl:w-1/4 hidden xl:block mt-20 content-center items-center">

        <motion.div className="mx-auto ml-[10vw] text-left w-2/3 mb-30 text-[3vw] text-stone-400" ref={ref} animate={textBoxControls} initial="hidden" variants={elementVariants}>
          About Me
        </motion.div>

        <motion.div className="w-3/5 ml-[20vh] mb-10 border-t-[8px] border-t-[solid] border-t-stone-400 rounded-[5px]" ref={ref} animate={textBoxControls} initial="hidden" variants={elementVariants} whileHover={{width: "65%", transition: {duration: 0.2}}}></motion.div>
        {/* About text box */}
        <motion.div className="hidden bg-[rgba(0,0,0,0)] xl:flex xl:w-full xl:ml-[10vh] 2xl:w-5/6 2xl:ml-[20vh] text-stone-400 text-[15px] border-[#36453c] rounded-2xl border-y-[1px] p-10 2xl:text-[20px]" whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}
          ref={ref}
          animate={textBoxControls}
          initial="hidden"
          variants={elementVariants}
        >
          <motion.div className="xl:text-[0.9vw] 2xl:text-[0.8vw]" ref={ref} animate={textBoxControls} initial="hidden" variants={elementVariants} >

            <p>
              Hey there! My name is Natalie Lynn and I'm a writer and content creator from the US. I've always been obsessed with stories - from books to movies to TV shows - you name it! I knew from a young age that I wanted to be a writer and eventually pursued an English degree to make that dream a reality.

              Nowadays, you can find me typing away on my laptop, brainstorming new ideas for articles and blog posts. Writing has always been my way of expressing myself and making sense of the world around me.

            </p>
            <br></br>
            <p>
              When I'm not busy creating content, I love spending time with my family and friends, trying out new recipes in the kitchen, and indulging in my guilty pleasure - binge-watching reality TV shows (don't judge me!).

              Overall, I'm just a regular gal with a passion for storytelling and a love for life. I'm excited to see where my writing journey takes me next!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="hidden xl:flex w-3/4 h-full items-center justify-center">
        <motion.video autoPlay muted loop className="w-3/5 h-auto ml-24 border border-[#36453c] rounded-2xl" whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}>
          <source src="dancinNatalie.mp4" type="video/mp4" />
        </motion.video>
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
