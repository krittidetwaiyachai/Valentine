import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Dialog, IconButton } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleDropZone from "./PuzzleDropZone";
import CloseIcon from "@mui/icons-material/Close";

const allPuzzles = [
  [
    { id: 1, img: "/images/puzzle1-9.jpg" },
    { id: 2, img: "/images/puzzle1-8.jpg" },
    { id: 3, img: "/images/puzzle1-7.jpg" },
    { id: 4, img: "/images/puzzle1-6.jpg" },
    { id: 5, img: "/images/puzzle1-5.jpg" },
    { id: 6, img: "/images/puzzle1-4.jpg" },
    { id: 7, img: "/images/puzzle1-3.jpg" },
    { id: 8, img: "/images/puzzle1-2.jpg" },
    { id: 9, img: "/images/puzzle1-1.jpg" },
  ],
  [
    { id: 1, img: "/images/puzzle2-9.jpg" },
    { id: 2, img: "/images/puzzle2-8.jpg" },
    { id: 3, img: "/images/puzzle2-7.jpg" },
    { id: 4, img: "/images/puzzle2-6.jpg" },
    { id: 5, img: "/images/puzzle2-5.jpg" },
    { id: 6, img: "/images/puzzle2-4.jpg" },
    { id: 7, img: "/images/puzzle2-3.jpg" },
    { id: 8, img: "/images/puzzle2-2.jpg" },
    { id: 9, img: "/images/puzzle2-1.jpg" },
  ],
  [
    { id: 1, img: "/images/puzzle3-9.jpg" },
    { id: 2, img: "/images/puzzle3-8.jpg" },
    { id: 3, img: "/images/puzzle3-7.jpg" },
    { id: 4, img: "/images/puzzle3-6.jpg" },
    { id: 5, img: "/images/puzzle3-5.jpg" },
    { id: 6, img: "/images/puzzle3-4.jpg" },
    { id: 7, img: "/images/puzzle3-3.jpg" },
    { id: 8, img: "/images/puzzle3-2.jpg" },
    { id: 9, img: "/images/puzzle3-1.jpg" },
  ],
];

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const JigsawGame = ({ open, onClose }) => {
  const [currentRound, setCurrentRound] = useState(0);
  const [placedPieces, setPlacedPieces] = useState({});
  const [shuffledPieces, setShuffledPieces] = useState([]);

  useEffect(() => {
    if (open) {
      setShuffledPieces(shuffleArray(allPuzzles[currentRound]));
      setPlacedPieces({});
    }
  }, [open, currentRound]);

  const handleDrop = (pieceId, targetId) => {
    setPlacedPieces((prev) => ({ ...prev, [targetId]: pieceId }));
  };

  const isCompleted =
    Object.keys(placedPieces).length === 9 &&
    Object.entries(placedPieces).every(([key, value]) => parseInt(key) === value);

  const nextRound = () => {
    if (isCompleted) {
      if (currentRound < 2) {
        setCurrentRound(currentRound + 1);
      } else {
        setCurrentRound(0);
      }
      setPlacedPieces({});
    }
  };

  const resetGame = () => {
    setPlacedPieces({});
    setShuffledPieces(shuffleArray(allPuzzles[currentRound]));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        },
      }}
    >
      <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
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

        <Typography variant="h4" sx={{ color: "#70c770", fontWeight: "bold", mb: 2 }}>
          🧩 มินิเกม Jigsaw (รอบที่ {currentRound + 1}/3)
        </Typography>

        <DndProvider backend={HTML5Backend}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* ✅ **ตาราง Jigsaw (มีเส้นประ 9 ช่อง)** */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "2px", // ✅ ลดช่องว่างให้ชิดขึ้น
                width: "330px",
                height: "330px",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              {[...Array(9).keys()].map((index) => (
                <PuzzleDropZone
                  key={index + 1}
                  id={index + 1}
                  onDrop={handleDrop}
                  placedPieces={placedPieces}
                  pieces={allPuzzles[currentRound]}
                  style={{
                    border: "2px dashed #ff4d6d", // ✅ **เพิ่มเส้นประให้ทุกช่อง**
                    width: "110px",
                    height: "110px",
                  }}
                />
              ))}
            </Box>

            {/* ✅ ชิ้นส่วนที่ต้องลาก-วาง */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "2px",
                marginLeft: "20px",
              }}
            >
              {shuffledPieces.map(
                (piece) =>
                  !Object.values(placedPieces).includes(piece.id) && (
                    <PuzzlePiece key={piece.id} id={piece.id} imageSrc={piece.img} />
                  )
              )}
            </Box>
          </Box>
        </DndProvider>

        {/* ✅ ปุ่มเล่นรอบต่อไป */}
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: isCompleted ? "#ff4d6d" : "#ddd", color: "white" }}
          onClick={nextRound}
          disabled={!isCompleted}
        >
          {currentRound === 2 ? "เริ่มใหม่ 🔄" : "เล่นรอบต่อไป ▶"}
        </Button>

        {/* ✅ ปุ่มรีเซ็ต */}
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: "#ffcc00", color: "black", "&:hover": { bgcolor: "#ffb300" } }}
          onClick={resetGame}
        >
          🔄 รีเซ็ตเกม
        </Button>
      </Box>
    </Dialog>
  );
};

export default JigsawGame;
