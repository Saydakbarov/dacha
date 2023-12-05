import React from "react";
import Tilt from "./Tilt";
import { motion } from "framer-motion";
const Category = ({ className, img, icon, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: 40 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ ease: "backOut", duration: 0.5 }}
    >
      <Tilt
        options={{
          max: 5,
          speed: 400,
          perspective: 1500,
          glare: true,
          scale: 1.1,
          "max-glare": 1,
          "glare-prerender": false,
        }}
        className={className}
        data-tilt
        data-tilt-max="5"
        data-tilt-speed="400"
        data-tilt-perspective="1500"
        data-tilt-glare
        data-tilt-max-glare="0.7"
        data-tilt-scale="1.1"
      >
        <img src={img} alt="" className="category-card-img" />
        <h3 className="category-card-heading">{category}</h3>
        <img src={icon} alt="" className="category-card-icon" />
      </Tilt>
    </motion.div>
  );
};

export default Category;
