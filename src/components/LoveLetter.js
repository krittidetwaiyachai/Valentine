import React, { useState, useEffect } from "react";
import { Dialog, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const loveMessage = `
ถึงคนที่เค้ารักที่สุดในโลก,

ตั้งแต่วันแรกที่เราได้พบกัน หัวใจของเค้าก็ถูกเติมเต็มไปด้วยความรักและความสุข
ทุกช่วงเวลาที่เราใช้ด้วยกันเป็นสิ่งที่มีค่าที่สุดในชีวิตของเค้าเล้ย

เค้าอาจจะไม่ได้พูดคำว่า "รัก" บ่อยๆ 
แต่เค้าอยากให้เบ๊บรู้ว่ามันอยู่ในทุกสิ่งที่เค้าทำให้เบ๊บ ทุกข้อความที่เค้าส่งให้ 
ทุกครั้งที่เค้าเป็นห่วง ทุกครั้งที่เค้าอยากให้เบ๊บดูแลตัวเอง 
มันคือการบอกรักของเค้าหมดเลยนะ

ขอบคุณที่เข้ามาในชีวิตเค้านะ ขอบคุณที่ทำให้เค้าได้รู้ว่าความรักมันสวยงามแค่ไหน 
ขอบคุณที่อยู่ข้างๆ กันในทุกวัน และขอบคุณที่เป็นเบ๊บ… คนที่เค้ารักที่สุด

ขอบคุณที่อยู่เคียงข้างกันเสมอ ไม่ว่าเวลาจะผ่านไปนานแค่ไหน
เค้าก็จะรักเบ๊บเสมอ และจะดูแลหัวใจของเราให้อบอุ่นตลอดไป

รักเบ๊บเสมอ ❤️
`;

const LoveLetter = ({ open, onClose }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setDisplayText(""); // ✅ รีเซ็ตข้อความก่อนเริ่ม
      setIndex(0);
      console.log("เปิดจดหมาย: เริ่มพิมพ์ข้อความ");

      const interval = setInterval(() => {
        setDisplayText((prev) => {
          console.log(`เพิ่มตัวอักษร: ${loveMessage[prev.length] || "หมดแล้ว"}`);
          return prev.length < loveMessage.length ? prev + loveMessage[prev.length] : prev;
        });

        setIndex((prev) => prev + 1);

        if (index >= loveMessage.length) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <Box
        sx={{
          p: 4,
          textAlign: "left",
          bgcolor: "#fff5f8",
          borderRadius: "12px",
          width: "400px",
          maxWidth: "90vw",
          position: "relative",
          boxShadow: "0 6px 15px rgba(255, 133, 162, 0.4)",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#d63384",
            fontSize: "32px",
            cursor: "pointer",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Typography
          variant="h5"
          sx={{ color: "#d63384", fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          💌 จดหมายจากน้องหยอง 💌
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "serif",
            whiteSpace: "pre-line",
            minHeight: "200px", // ✅ ป้องกันกระพริบขณะโหลด
          }}
        >
          {displayText}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default LoveLetter;
