import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Welcome() {
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
        backgroundImage: "url('Images/banner1.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
        borderRadius : '20px'
      }}
    >


      <AnimatedTitle/>
    </div>
  );
}


function AnimatedTitle() {
  const text = "Welcome to Apni Dukaan...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 150); 
    return () => clearInterval(interval);
  }, []);

  return (
    <p
    style={{
      position: "relative",
      zIndex: 10,
      WebkitBackgroundClip: "text",
      fontWeight: "600",
      fontSize: "70px",
      fontFamily: "cursive",
      textAlign: "center",
      margin: 0,
      transform: "translateY(-30px)",
      letterSpacing: "0px",
      whiteSpace: "pre",
      color : '#fff'
    }}
    

    
    >
      {displayedText}
    </p>
  );
}
