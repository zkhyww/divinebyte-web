"use client";
import { motion } from "framer-motion";

const LiquidEther = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/50 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/50 rounded-full blur-[120px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LiquidEther;