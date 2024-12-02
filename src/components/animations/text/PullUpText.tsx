"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PullUpText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const splitText = text.split("");
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <p
      ref={ref}
      className={cn(`w-fit h-fit text-2xl  overflow-hidden ${className} `)}
    >
      {splitText.map((letter, index) => (
        <motion.span
          key={`${letter}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
          className="relative inline-block w-fit text-center"
        >
          <span className="invisible">
            {letter === " " ? "\u00A0" : letter}
          </span>
          <motion.span
            initial={{ y: index % 2 === 0 ? 30 : -30 }}
            animate={{ y: isInView ? 0 : index % 2 === 0 ? -30 : 30 }}
            transition={{
              delay: index * 0.1 + 0.2,
              duration: 0.2,
              ease: "easeOut",
            }}
            className="absolute left-0 right-0"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </motion.span>
      ))}
    </p>
  );
}
