import Button from "./Button";
import GameRule from "./GameRule";

// eslint-disable-next-line react/prop-types
const DiceRole = ({
  rollDiceHndeler,
  rollDice,
  ruleHandel,
  showRule,
  resetGame,
}) => {
  return (
    <div
      className="
    flex
    flex-col
    items-center
    gap-8
    "
    >
      <div
        className="
    flex
    flex-col
    justify-center
    items-center
    gap-2
    cursor-pointer
    "
      >
        <img
          onClick={rollDiceHndeler}
          src={`/public/Dicess/dice_${rollDice}.png`}
          alt=""
        />
        <p className="text-2xl text-black text-center">Click on Dice to roll</p>
      </div>

      <div
        className="
          flex
          flex-col
          gap-3
          max-w-[220px]
          mx-auto
          "
      >
        <Button onClick={resetGame} isBorder={true}>
          Reset Score
        </Button>
        <Button onClick={ruleHandel}>
          {!showRule ? "Show Rules" : "Hide Rules"}
        </Button>
      </div>

      <div>{showRule ? <GameRule /> : null}</div>
    </div>
  );
};

export default DiceRole;
