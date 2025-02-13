import React, { useEffect, useState } from "react";
import { Dialog, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const messages = [
  "รักเบ๊บที่สุดในโลก!",
  "เบ๊บคือคนพิเศษของเค้าเล้ย ❤️",
  "Happy Valentine's Day นะไอดื้อ!"
];

const MessageDialog = ({ open, onClose }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (open) {
      let interval = setInterval(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <Box
        sx={{
          p: 4,
          textAlign: "center",
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

        <Typography variant="h5" sx={{ color: "#d63384", fontWeight: "bold", mb: 2 }}>
          💌 ข้อความพิเศษจากน้องหยอง 💌
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#ff4d6d", fontWeight: "bold", mt: 2 }}
        >
          {messages[messageIndex]}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default MessageDialog;
