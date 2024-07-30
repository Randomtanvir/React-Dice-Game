import { useState } from "react";
import PlayGame from "./Component/PlayGame";
import PlayingPage from "./Component/PlayingPage";

const App = () => {
  const [isGame, setIsGame] = useState(true);
  const toggle = () => {
    setIsGame((prev) => !prev);
  };
  return (
    <div className="container mx-auto">
      {isGame ? <PlayGame onClick={toggle} /> : <PlayingPage />}
    </div>
  );
};

export default App;
