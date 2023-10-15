import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          textVariants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 textVariants={textVariants}>Hi,Im Adnan</motion.h2>
          <motion.h1 textVariants={textVariants}>
            Web Developer and SEO Expert
          </motion.h1>
          <motion.div className="buttons" textVariants={textVariants}>
            <motion.button textVariants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button textVariants={textVariants}>
              Contact me
            </motion.button>
          </motion.div>
          <img src="/scroll.png" alt="" textVariants={textVariants} />
        </motion.div>
      </div>
      <div className="">MERN Developer and Digital Marketer</div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
