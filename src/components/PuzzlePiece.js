import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@mui/material";

const PuzzlePiece = ({ id, imageSrc }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "puzzlePiece",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        width: 100,
        height: 100,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        border: "2px solid #ff4d6d",
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        margin: "5px",
      }}
    />
  );
};

export default PuzzlePiece;
