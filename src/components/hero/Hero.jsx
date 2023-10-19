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
  scrollButon: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror"
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
          <motion.h2 variants={textVariants}>Hi,Im Adnan</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and SEO Expert
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButon"
            variants={textVariants}
          />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">MERN Developer and Digital Marketer</motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
