import { motion } from "framer-motion"

export default function Pricing() {
  return (
    <div id='pricing' className='h-screen flex items-center bg-[#181d1a] border-y border-[#36453c] rounded-2xl snap-start'>
      {/* Pricing Title */}
      <div className="hidden xl:block">
        <div className="ml-[20vh] mb-30 text-[10vh] text-stone-400">Pricing</div>
        <div className="w-[50vh] ml-[20vh] mb-36 border-t-[8px] border-t-[solid] border-t-stone-400 rounded-[5px]"></div>
      </div>
      {/* Pricing text box */}
      <motion.div className='w-2/3 hidden xl:block m-36 text-stone-400 text-[15px] rounded-2xl border-[#36453c] border-y-[1px] p-10 2xl:h-2/3 2xl:text-[1.7rem]' whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}>
        <p>
          Pricing goes here
        </p>
          <br></br>
        <p>
          More prices go here
        </p>
      </motion.div>


      <div className="text-white block xl:hidden ml-12 mr-12 border-[#36453c] border-y-[1px] p-10">
        <div className=" text-[6vh] text-white">About Me</div>
        <div className="w-[30vh] border-t-[8px] border-t-[solid] border-t-[rgb(255,255,255)] rounded-[5px]"></div>
        <p>
          Pricing goes here
        </p>
          <br></br>
        <p>
          More prices go here
        </p>
      </div>

    </div>
  )
}
