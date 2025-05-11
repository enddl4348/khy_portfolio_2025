import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="loader">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1.5, 0],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="loader__box"
      />
    </div>
  );
}
