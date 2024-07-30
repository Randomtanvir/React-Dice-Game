import React from "react";

const GameRule = () => {
  return (
    <div
      className="
        bg-[#FBF1F1]
        md:max-w-[794px]
        sm:max-w-[500px]
        max-w-[350px]
        text-black
        p-6

        "
    >
      <h2 className="text-2xl">How to play dice game.</h2>
      <p>Select any number.</p>
      <p>Click on dice image.</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice.
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted. </p>
    </div>
  );
};

export default GameRule;
