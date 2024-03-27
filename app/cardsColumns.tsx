import React from "react";
import BoardGame from "./card";
// Chat GPT

interface BoardGameData {
  id: string;
  name: string;
  thumbnail: string;
  complexity: number;
  minPlayers: number;
  maxPlayers: number;
}

interface CardsColumnsProps {
  boardGames: BoardGameData[];
}

const CardsColumns: React.FC<CardsColumnsProps> = ({ boardGames }) => {
  return (
    <div className="columns-2 justify-center">
      {boardGames.map((game) => (
        <div key={game.id} className="m-4">
          <BoardGame
            name={game.name}
            thumbnail={game.thumbnail}
            complexity={game.complexity}
            minPlayers={game.minPlayers}
            maxPlayers={game.maxPlayers}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsColumns;
