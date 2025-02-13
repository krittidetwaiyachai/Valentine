import React from "react";
import { Button, Grid } from "@mui/material";

const GiftBox = ({ index, setOpenMessageBox, setOpenMusicBox }) => {
  return (
    <Grid item>
      <Button
        variant="contained"
        onClick={() => {
          if (index === 0) setOpenMessageBox(true);
          if (index === 1) setOpenMusicBox(true);
        }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "12px",
          bgcolor: "#ff85a2",
          boxShadow: "0 4px 10px rgba(255, 133, 162, 0.4)",
          "&:hover": { bgcolor: "#ff4d6d" },
        }}
      >
        🎁
      </Button>
    </Grid>
  );
};

export default GiftBox;
