import React from "react";
import data from "../data/reviewData";
import star from "../assets/review/star.png";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <motion.div
      id="testimonials"
      className="h-auto md:h-screen w-screen justify-center items-center flex flex-col p-10 md:p-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center md:text-left text-4xl text-[#1A2237] font-bold">
        Read Our Rave Reviews
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 items-center w-[350px] p-5"
          >
            <div>
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="text-[#000] font-semibold font-pop">
              {item.name}
            </div>
            <div className="text-[#5e596c] font-pop">{item.company}</div>
            <div className="flex gap-2">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="text-[#5e596c] font-pop text-center">
              {item.review}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
