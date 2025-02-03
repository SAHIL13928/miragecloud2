"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const GradientButton = ({ children }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x, y });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className="relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] px-16 py-2 uppercase font-bold text-xs text-black transition-all duration-200 flex items-center justify-center space-x-1"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute -z-10 flex w-[204px] items-center justify-center"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {/* Outer glow */}
        <div className="absolute top-1/2 left-1/2 h-[121px] w-[121px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,#FFFFF5_3.5%,#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]" />
        {/* Inner soft glow */}
        <div className="absolute top-1/2 left-1/2 h-[103px] w-[204px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,#FFFFF7_29%,#FFFACD_48.5%,#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
      </motion.div>
      {children}
    </motion.button>
  );
};

export default GradientButton;
