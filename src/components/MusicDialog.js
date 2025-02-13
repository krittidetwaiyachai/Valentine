import React from "react";
import { Dialog, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const specialSongUrl = "https://www.youtube.com/embed/OYPiXBIgvJ8?autoplay=1";

const MusicDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          bgcolor: "#fff5f8",
          borderRadius: "20px",
          width: "800px",
          maxWidth: "95vw",
          position: "relative",
        }}
      >
        {/* ปุ่มปิด (กากบาท) */}
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

        <Typography variant="h3" sx={{ color: "#d63384", fontWeight: "bold", mb: 2 }}>
          🎶 เพลงพิเศษจากน้องหยอง 🎶
        </Typography>
        <iframe
          width="700"
          height="420"
          src={specialSongUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Box>
    </Dialog>
  );
};

export default MusicDialog;
