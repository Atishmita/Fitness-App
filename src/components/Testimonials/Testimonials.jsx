import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>What they say about us</span>
        <span>Testimonials</span>
        <div className="header-line"></div>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}>
          {testimonialsData[selected].review}
        </motion.span>
        <span style={{ color: "var(--orange)", fontWeight: "bold" }}>
          {testimonialsData[selected].name}
        </span>
        <span>{testimonialsData[selected].status}</span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}/>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }} />
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""/>
        <div className="arrows">
          <FaArrowLeft
            className="arrow-icon"
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}/>
          <FaArrowRight
            className="arrow-icon"
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}  />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;