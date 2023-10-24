import { useRef } from "react";
import "./portfollio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Project",
    img: "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur suscipit aliquam facere. Ad optio cupiditate minus assumenda omnis? At.",
  },
  {
    id: 2,
    title: "React Project",
    img: "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur suscipit aliquam facere. Ad optio cupiditate minus assumenda omnis? At.",
  },
  {
    id: 3,
    title: "React Project",
    img: "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur suscipit aliquam facere. Ad optio cupiditate minus assumenda omnis? At.",
  },
  {
    id: 4,
    title: "React Project",
    img: "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur suscipit aliquam facere. Ad optio cupiditate minus assumenda omnis? At.",
  },
];

const Data = ({ items }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
   //  offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={items.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}} >
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfollio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfollio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Data items={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfollio;
