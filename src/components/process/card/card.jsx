import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <div className="relative w-[11.25rem]">
        <motion.div whileTap={{
        scale: 1.1,
        transition: {
          type: "spring",
          bounce:.7,
        },
      }}>
        <LazyLoadImage
          width={180}
          height={206}
          src={props.photo}
          className="rounded-2xl w-[180px] h-[206px]"
          />
          </motion.div>
        <p className="absolute text-3xl font-bold text-white top-3 left-3">
          0{props.number}
        </p>
        <p className="text-center font-bold text-xl">{props.context}</p>
        <p className="text-center text-[12px] w-full">{props.desc}</p>
      </div>
    </motion.div>
  );
}

export default Card;
