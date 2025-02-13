import React, { useEffect, useState, useRef } from "react";
import { Dialog, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const photoUrls = [
    "/images/memory1.jpg",
    "/images/memory2.jpg",
    "/images/memory3.jpg",
    "/images/memory4.jpg",
    "/images/memory5.jpg",
    "/images/memory6.jpg",
    "/images/memory7.jpg",
    "/images/memory8.jpg",
    "/images/memory9.jpg",
    "/images/memory10.jpg",
    "/images/memory11.jpg",
    "/images/memory12.jpg",
    "/images/memory13.jpg",
    "/images/memory14.jpg",
    "/images/memory15.jpg",
    "/images/memory16.jpg",
    "/images/memory17.jpg",
    "/images/memory18.jpg",
    "/images/memory19.jpg",
    "/images/memory20.jpg",
    "/images/memory21.jpg",
    "/images/memory22.jpg",
    "/images/memory23.jpg",
    "/images/memory24.jpg",
  ];

const PhotoMemories = ({ open, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setCurrentIndex(0);
      setIsVideoPlaying(false);
      return;
    }

    if (currentIndex < photoUrls.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setIsVideoPlaying(true);
    }
  }, [currentIndex, open]);

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video autoplay failed:", err));
    }
  }, [isVideoPlaying]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff5f8",
          borderRadius: "12px",
          width: "100%",
          height: "90vh",
          position: "relative",
          overflow: "hidden",
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

        <Typography variant="h4" sx={{ color: "#d63384", fontWeight: "bold", mb: 2 }}>
          📷 ความทรงจำของเรา
        </Typography>

        {!isVideoPlaying ? (
          <Box
            key={currentIndex}
            sx={{
              width: "80vw",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={photoUrls[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              style={{
                width: "auto",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "10px",
                opacity: 1,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: "80vw",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "black",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <video
              ref={videoRef}
              src="/videos/love-video.mp4"
              controls
              autoPlay
              onEnded={onClose} // ปิดอัตโนมัติเมื่อวิดีโอเล่นจบ
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}

        {/* เสียงเพลง */}
        {!isVideoPlaying && (
          <audio autoPlay loop>
            <source src="/love-song.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </Box>
    </Dialog>
  );
};

export default PhotoMemories;
