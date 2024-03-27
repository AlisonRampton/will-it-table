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
    <div className="sm:columns-2 lg:columns-3 xl:columns-4 justify-center">
      {boardGames.map((game) => (
        <div key={game.id} className="m-4 break-inside-avoid-column">
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
