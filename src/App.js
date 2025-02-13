import React, { useState } from "react";
import Home from "./pages/Home";
import EnterPassword from "./pages/EnterPassword";
import GiftPage from "./pages/GiftPage";

const App = () => {
  const [count, setCount] = useState(0);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [showGiftBoxes, setShowGiftBoxes] = useState(false);

  const handleClick = () => {
    if (count < 30) {
      setCount(count + 1);
    }
    if (count + 1 === 30) {
      setShowPasswordInput(true);
    }
  };

  const handleNumberClick = (num) => {
    if (password.length < 6) {
      const newPassword = password + num;
      setPassword(newPassword);
      if (newPassword === "020264") {
        setShowGiftBoxes(true);
      }
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  return showGiftBoxes ? (
    <GiftPage />
  ) : showPasswordInput ? (
    <EnterPassword password={password} handleNumberClick={handleNumberClick} handleDelete={handleDelete} />
  ) : (
    <Home count={count} handleClick={handleClick} />
  );
};

export default App;
