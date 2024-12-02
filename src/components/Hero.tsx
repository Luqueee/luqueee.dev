"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div className={` w-fit ${outfit.className}`}>
      <motion.div
        style={{
          y: y,
        }}
        className="flex "
      >
        <motion.p
          style={{
            x: x2,
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Front
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {" "}
          -{" "}
        </motion.p>
        <motion.p
          style={{
            x: x,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          End
        </motion.p>
      </motion.div>
      <motion.p
        // style={{
        //   x: x,
        // }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Developer
      </motion.p>
    </motion.div>
  );
}
