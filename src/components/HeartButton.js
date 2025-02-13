import React, { useRef, useEffect } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const HeartButton = ({ handleClick, count }) => {
  const heartSound = useRef(null);

  useEffect(() => {
    // โหลดเสียงไว้ล่วงหน้า
    heartSound.current = new Audio("/sounds/heart-click.mp3");
    heartSound.current.volume = 0.5; // ปรับความดัง
  }, []);

  const playSound = () => {
    if (heartSound.current) {
      heartSound.current.currentTime = 0; // รีเซ็ตเสียงให้เล่นใหม่
      heartSound.current.play();
    }
  };

  const handleButtonClick = () => {
    playSound();
    handleClick(); // เรียกใช้ฟังก์ชันที่ส่งมาจาก props
  };

  return (
    <motion.div animate={{ scale: count / 30 + 1 }} transition={{ type: "spring", stiffness: 100 }}>
      <Button
        onClick={handleButtonClick}
        sx={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          bgcolor: "#ff4d6d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 8px 20px rgba(255, 77, 109, 0.5)",
          transition: "transform 0.2s",
          "&:hover": { bgcolor: "#e63950", transform: "scale(1.1)" },
        }}
      >
        <FavoriteIcon sx={{ fontSize: 140, color: "white" }} />
      </Button>
    </motion.div>
  );
};

export default HeartButton;
