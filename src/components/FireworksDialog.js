import React, { useEffect, useRef } from "react";
import { Dialog, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Fireworks from "./Fireworks";

const FireworksDialog = ({ open, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (open) {
      // โหลดเสียงและเล่นอัตโนมัติ
      audioRef.current = new Audio("/fireworks-sound.mp3");
      audioRef.current.loop = true;
      audioRef.current.play().catch((err) => console.error("Failed to play audio:", err));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [open]);

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullScreen>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          bgcolor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Fireworks duration={25000} onEnd={handleClose} />

        <Typography
          variant="h3"
          sx={{ position: "absolute", color: "#ff85a2", fontWeight: "bold", textAlign: "center" }}
        >
          🎇 พลุแห่งความรัก 🎇
        </Typography>

        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
            fontSize: "32px",
            cursor: "pointer",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default FireworksDialog;
