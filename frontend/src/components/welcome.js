import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function Welcome() {
  // Add glowing gradient and animation keyframes
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gradientWave {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const paths = [
    "M0,100 Q360,200 720,100 T1440,100",
    "M0,150 Q360,250 720,150 T1440,150",
    "M0,200 Q360,300 720,200 T1440,200",
  ];

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0.2 },
    animate: { pathLength: 1, opacity: 1 },
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff", // dark bg for glowing lines
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* === Animated Glowing SVG Background === */}
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#0070F3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 6 + i,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            stroke="url(#glowGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            opacity="0.7"
          />
        ))}
      </motion.svg>

      {/* === Gradient Text === */}
      <p
        style={{
          position: "relative",
          zIndex: 10,
          background: "linear-gradient(to bottom right, #ff0745, #000cff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "900",
          fontSize: "70px",
          textAlign: "center",
          margin: 0,
          transform: "translateY(-30px)",
          letterSpacing: "2px",
        }}
      >
        Welcome to Apni Dukaan!
      </p>
    </div>
  );
}
