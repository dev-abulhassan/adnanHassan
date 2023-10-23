import "./services.scss";
import { motion } from "framer-motion";

const boxItems = [
  {
    id: 1,
    title: "Search Engine Optimization",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 2,
    title: "Wordpress",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 3,
    title: "Web Design",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 4,
    title: "Web Development",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
];

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <p>
          I focus on helping your brand grow <br /> and move forward
        </p> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.strong whileHover={{color: "orange"}}>Unique</motion.strong> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.strong whileHover={{color: "orange"}}>For Your</motion.strong> Business.
          </h1>
          <button>What we do</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          {boxItems.map((item) => (
            <motion.div
              whileHover={{ background: "lightgray", color: "black" }}
              key={item.id}
            >
              <h2>{item.title}</h2>
              <p>{item.decs}</p>
              <button>{item.btn}</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
