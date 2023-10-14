import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerdChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerdChildren: 0.05,
      staggerdDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 0,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "About", "Contact"];
  return (
    <motion.div variants={variants} className="links">
      {items.map((items) => (
        <motion.a
          href={`#${items}`}
          key={items}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {items}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
