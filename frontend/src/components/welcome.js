import React from "react";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #ffffff, #eef3ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Blob 1 */}
      <motion.div
        animate={{ x: [0, 260, -220, 0], y: [0, -200, 150, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff6a88, #ffb199)",
          filter: "blur(120px)",
          opacity: 0.85,
        }}
      />

      {/* Blob 2 */}
      <motion.div
        animate={{ x: [0, -300, 260, 0], y: [0, 260, -200, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #859cffff, #a6c1ff)",
          filter: "blur(120px)",
          opacity: 0.85,
        }}
      />

      {/* Blob 3 */}
      <motion.div
        animate={{ x: [0, 180, -160, 0], y: [0, -120, 100, 0] }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a8ff78, #78ffd6)",
          filter: "blur(120px)",
          opacity: 0.75,
        }}
      />

      {/* Center Card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.05,
          rotateX: 6,
          rotateY: -6,
          boxShadow: "0 60px 140px rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          zIndex: 10,
          padding: "90px 130px",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
          textAlign: "center",
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            marginBottom: "20px",
            background:
              "linear-gradient(90deg, #ff512f, #dd2476, #1fa2ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Apni Dukaan
        </h1>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#222",
            opacity: 0.9,
          }}
        >
          A modern shopping experience
        </p>
      </motion.div>
    </div>
  );
}
