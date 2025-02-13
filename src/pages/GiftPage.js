import React, { useState } from "react";
import { Container, Grid, Button, Dialog, Box, IconButton, Typography } from "@mui/material";
import MessageDialog from "../components/MessageDialog";
import MusicDialog from "../components/MusicDialog";
import CouponCard from "../components/CouponCard";
import JigsawGame from "../components/JigsawGame";
import PhotoMemories from "../components/PhotoMemories";
import LoveLetter from "../components/LoveLetter"; 
import CloseIcon from "@mui/icons-material/Close";

const GiftPage = () => {
  const [openMessageBox, setOpenMessageBox] = useState(false);
  const [openMusicBox, setOpenMusicBox] = useState(false);
  const [openCouponBox, setOpenCouponBox] = useState(false);
  const [openJigsawBox, setOpenJigsawBox] = useState(false);
  const [openPhotoMemories, setOpenPhotoMemories] = useState(false);
  const [openLoveLetter, setOpenLoveLetter] = useState(false);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/heart-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {[...Array(6).keys()].map((index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              onClick={() => {
                if (index === 0) setOpenMessageBox(true);
                if (index === 1) setOpenMusicBox(true);
                if (index === 2) setOpenCouponBox(true);
                if (index === 3) {
                  console.log("✅ เปิด Jigsaw Game");
                  setOpenJigsawBox(true);
                }
                if (index === 4) setOpenPhotoMemories(true);
                if (index === 5) setOpenLoveLetter(true);
              }}
              sx={{
                width: 140,
                height: 140,
                borderRadius: "16px",
                fontSize: "28px",
                bgcolor: "#ff85a2",
                boxShadow: "0 6px 15px rgba(255, 133, 162, 0.4)",
                "&:hover": { bgcolor: "#ff4d6d" },
              }}
            >
              {index === 0 ? "💌" : 
               index === 1 ? "🎶" : 
               index === 2 ? "🎟️" : 
               index === 3 ? "🧩" : 
               index === 4 ? "📷" : 
               index === 5 ? "💌" : "🎁"}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Dialog กล่องที่ 1 (ข้อความพิเศษ) */}
      <MessageDialog open={openMessageBox} onClose={() => setOpenMessageBox(false)} />

      {/* ✅ Dialog กล่องที่ 2 (เพลงพิเศษ) */}
      <MusicDialog open={openMusicBox} onClose={() => setOpenMusicBox(false)} />

      {/* ✅ Dialog กล่องที่ 3 (คูปองพิเศษ) */}
      <Dialog open={openCouponBox} onClose={() => setOpenCouponBox(false)} maxWidth="xs" fullWidth>
  <Box
    sx={{
      p: 4,
      textAlign: "center",
      bgcolor: "#fff5f8",
      borderRadius: "12px",
      width: "auto",
      maxWidth: "90vw",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    }}
  >
    <IconButton
      onClick={() => setOpenCouponBox(false)}
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
      🎉 คูปองพิเศษจากน้องหยอง! 🎉
    </Typography>

    <CouponCard />
  </Box>
</Dialog>

      {/* ✅ Dialog กล่องที่ 4 (Jigsaw Game) */}
      <Dialog open={openJigsawBox} onClose={() => setOpenJigsawBox(false)} maxWidth="md" fullWidth>
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            bgcolor: "#fff5f8",
            borderRadius: "12px",
            width: "600px",
            maxWidth: "90vw",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setOpenJigsawBox(false)}
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
            🧩 มินิเกม Jigsaw
          </Typography>

          <JigsawGame open={openJigsawBox} onClose={() => setOpenJigsawBox(false)} />
        </Box>
      </Dialog>

      {/* ✅ Dialog กล่องที่ 5 (อัลบั้มภาพ + วิดีโอท้ายสุด) */}
      <PhotoMemories open={openPhotoMemories} onClose={() => setOpenPhotoMemories(false)} />

      {/* ✅ Dialog กล่องที่ 6 (จดหมายจากใจ) */}
      <LoveLetter open={openLoveLetter} onClose={() => setOpenLoveLetter(false)} />
    </Container>
  );
};

export default GiftPage;
