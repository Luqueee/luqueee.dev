"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedWritterText({ text }: { text: string }) {
  const textArray = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div ref={ref} className="">
      <p className="container w-full text-wrap max-w-full flex flex-wrap gap-1">
        {textArray.map((letter, index) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: index * 0.001 }}
            className="relative overflow-y-hidden"
          >
            <motion.span
              initial={{
                y: -100,
              }}
              animate={{
                y: isInView ? 0 : -100,
              }}
              transition={{
                delay: index * 0.01,
              }}
              className="relative inline-block"
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </p>
    </div>
  );
}
