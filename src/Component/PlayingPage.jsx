import React, { useEffect, useState } from "react";
import Score from "./Score";
import Boxs from "./Boxs";
import DiceRole from "./DiceRole";

const PlayingPage = () => {
  const [showRule, setShowRule] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [rollDice, setRollDice] = useState(1);
  const [score, setScore] = useState(0);
  const [err, setError] = useState("");

  const ruleHandel = () => {
    setShowRule((prevRule) => !prevRule);
  };

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const rollDiceHndeler = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const random = randomNumber(1, 6);
    setRollDice(random);

    if (selectedNumber === random) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setScore(0);
  };

  return (
    <div>
      <div
        className="
    flex
    justify-between
    md:items-end
    md:flex-row
    items-center
    flex-col
    "
      >
        <Score score={score} />
        <Boxs
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          err={err}
          setError={setError}
        />
      </div>

      <div
        className="

    flex
    items-center
    justify-center
    mt-8
    "
      ></div>
      <DiceRole
        rollDiceHndeler={rollDiceHndeler}
        rollDice={rollDice}
        ruleHandel={ruleHandel}
        showRule={showRule}
        resetGame={resetGame}
      />
    </div>
  );
};

export default PlayingPage;
