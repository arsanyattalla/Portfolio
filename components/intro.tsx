"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <motion.path
          d="M100 20 L30 180 H55 L75 130 H125 L145 180 H170 L100 20 Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
