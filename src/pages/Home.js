import React from "react";
import { Container } from "@mui/material";
import HeartButton from "../components/HeartButton";

const Home = ({ count, handleClick }) => {
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
      <HeartButton handleClick={handleClick} count={count} />
    </Container>
  );
};

export default Home;
