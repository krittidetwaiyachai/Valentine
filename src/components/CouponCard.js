import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const fixedCoupons = [
  "💖 ตามใจ 1 วัน!",
  "😘 ใช้งานตามสั่ง 5 ครั้ง!",
  "🍽️ พาไปกินอะไรก็ได้ 1 วัน!",
  "🍔 ทำอาหารให้ทาน 1 มื้อ",
  "🛍️ ช้อปปิ้งฟรี 1 ชิ้น",
];

const CouponCard = () => {
  const [openedCards, setOpenedCards] = useState(Array(5).fill(false));

  const handleCardClick = (index) => {
    if (!openedCards[index]) {
      const newOpenedCards = [...openedCards];
      newOpenedCards[index] = true;
      setOpenedCards(newOpenedCards);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center">
        {fixedCoupons.map((text, index) => (
          <Grid item key={index}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: openedCards[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleCardClick(index)}
              style={{
                width: "150px",
                height: "200px",
                borderRadius: "12px",
                cursor: openedCards[index] ? "default" : "pointer",
                perspective: "1000px",
                position: "relative",
                transformStyle: "preserve-3d", // ✅ ปรับให้พลิกถูกต้อง
              }}
            >
              {/* ด้านหน้า */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#ff85a2",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  boxShadow: "0 6px 15px rgba(255, 133, 162, 0.4)",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                }}
              >
                🎁 คลิกเพื่อเปิด!
              </Box>

              {/* ด้านหลัง */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#ff4d6d",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  boxShadow: "0 6px 15px rgba(255, 77, 109, 0.5)",
                  position: "absolute",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden", // ✅ แก้ไขให้ข้อความมองเห็น
                  direction: "ltr",
                  padding: "8px",
                }}
              >
                {openedCards[index] ? text : ""}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CouponCard;
