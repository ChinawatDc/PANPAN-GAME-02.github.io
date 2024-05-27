import BoardView from "../Components/Board";
import "../main.scss";
import "../styles.scss";

const Game4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">2048</h1>
      <BoardView />
    </div>
  );
};

export default Game4;
