import React from "react";
import Button from "./Button";
const PlayGame = ({ onClick }) => {
  return (
    <div
      className="
    font-Poppins
    flex
    items-center
    justify-center
    h-screen
    "
    >
      <div>
        <img src="/dices 1.png" alt="dice_img" />
      </div>
      <div
        className="
      flex
      flex-col
      "
      >
        <h1
          className="
        text-[96px]
        "
        >
          DICE GAME
        </h1>
        <div
          className="
        text-right
        "
        >
          <Button onClick={onClick}>Play Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
