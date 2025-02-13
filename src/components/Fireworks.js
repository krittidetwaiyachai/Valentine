import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const Fireworks = ({ duration = 25000, onEnd }) => {
  const canvasRef = useRef(null);
  const confettiInstance = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    confettiInstance.current = confetti.create(canvas, { resize: true, useWorker: false });

    const interval = setInterval(() => {
      confettiInstance.current({
        particleCount: 100,
        spread: 200,
        startVelocity: 50,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
        colors: ["#ff4d6d", "#ff85a2", "#fbc2eb"],
      });
    }, 1000);

    // หยุดหลังจากครบ 25 วินาที
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (confettiInstance.current) {
        confettiInstance.current.reset();
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (onEnd) onEnd();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (confettiInstance.current) {
        confettiInstance.current.reset();
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [duration, onEnd]);

  return <canvas ref={canvasRef} style={{ position: "absolute", width: "100%", height: "100%" }} />;
};

export default Fireworks;
