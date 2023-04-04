import { motion, useScroll } from "framer-motion"
import { useAnimationControls } from "framer-motion"
import { useEffect } from "react";


const Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <>
            <motion.button 
                className="fixed bottom-0 right-0 p-10" 
                onClick={scrollToTop}
                variants={Variants}
                initial="hide"
                animate={controls}>
                <img className='h-20' src='pine.png'/>
            </motion.button>
        </>
    );
}

export default ScrollToTopButton;