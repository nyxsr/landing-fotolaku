import React from "react";
import { FABwa } from "../../assets/manage";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FAB() {
  return (
    <motion.div
      onClick={() =>
        (window.location.href = `https://wa.me/6281394683395?text=${encodeURIComponent(
          "Halo semuanya!"
        )}`)
      }
      animate={{
        y: [0, -10, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
        },
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 5,
        },
      }}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      drag
      className="fixed bottom-0 right-0 z-50"
    >
      <img src={FABwa} alt="fab" />
    </motion.div>
  );
}

export default FAB;
