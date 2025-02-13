import React from "react";
import { useDrop } from "react-dnd";
import { Box } from "@mui/material";

const PuzzleDropZone = ({ id, onDrop, placedPieces, pieces }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "puzzlePiece",
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const placedPiece = pieces.find((p) => p.id === placedPieces[id]);

  return (
    <Box
      ref={drop}
      sx={{
        width: 100,
        height: 100,
        backgroundColor: isOver ? "#ff85a2" : "#fff",
        border: "2px dashed #ff4d6d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {placedPiece && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${placedPiece.img})`,
            backgroundSize: "cover",
          }}
        />
      )}
    </Box>
  );
};

export default PuzzleDropZone;
