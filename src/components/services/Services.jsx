import "./services.scss";
import { motion } from "framer-motion";

const boxItems = [
  {
    id: 1,
    title: "Branding",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 2,
    title: "Branding",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 3,
    title: "Branding",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
  {
    id: 4,
    title: "Branding",
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam voluptatum. Suscipit libero non accusantium? Libero dolorum blanditiis laboriosam corporis!",
    btn: "Go",
  },
];



const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        {/* <p>
          I focus on helping your brand grow <br /> and move forward
        </p> */}
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <strong>Unique</strong> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <strong>For Your</strong> Business.
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
