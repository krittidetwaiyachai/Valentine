import React from "react";
import { Grid, Button, Typography } from "@mui/material";

const PasswordInput = ({ password, handleNumberClick, handleDelete }) => {
  return (
    <>
      <Typography variant="h3" sx={{ color: "#d63384", mb: 3, fontWeight: "bold" }}>
        Enter Your Love Code 💕
      </Typography>
      <Typography variant="h4" sx={{ color: "#ff4d6d", mb: 3, fontWeight: "bold" }}>
        {password}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(10).keys()].map((num) => (
          <Grid item key={num}>
            <Button
              variant="contained"
              onClick={() => handleNumberClick(num)}
              sx={{
                minWidth: 90,
                minHeight: 90,
                fontSize: 30,
                borderRadius: "50%",
                bgcolor: "#ff85a2",
                boxShadow: "0 6px 15px rgba(255, 133, 162, 0.4)",
                "&:hover": { bgcolor: "#ff4d6d" },
              }}
            >
              {num}
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              minWidth: 90,
              minHeight: 90,
              fontSize: 30,
              borderRadius: "50%",
              bgcolor: "#ff4d6d",
              color: "white",
              boxShadow: "0 6px 15px rgba(255, 77, 109, 0.4)",
              "&:hover": { bgcolor: "#e63950" },
            }}
          >
            ⬅
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PasswordInput;
