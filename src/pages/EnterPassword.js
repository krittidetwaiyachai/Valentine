import React from "react";
import { Container } from "@mui/material";
import PasswordInput from "../components/PasswordInput";

const EnterPassword = ({ password, handleNumberClick, handleDelete }) => {
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
      <PasswordInput password={password} handleNumberClick={handleNumberClick} handleDelete={handleDelete} />
    </Container>
  );
};

export default EnterPassword;
