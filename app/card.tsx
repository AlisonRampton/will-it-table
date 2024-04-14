import React from "react";
import Modal from "./modal";
// Chat GPT

interface BoardGameProps {
  name: string;
  thumbnail: string;
  complexity: number;
  minPlayers: number;
  maxPlayers: number;
  avgSize: string;
}

const BoardGame: React.FC<BoardGameProps> = ({
  name,
  thumbnail,
  complexity,
  minPlayers,
  maxPlayers,
  avgSize,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div className="text-purple-900 font-semibold text-lg mb-2">{name}</div>
      <div className="flex items-center mb-2">
        <span className="text-gray-600 mr-1">Complexity:</span>
        <span className="text-gray-800">{complexity}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-gray-600 mr-1">Players:</span>
        <span className="text-gray-800">
          {minPlayers} - {maxPlayers}
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 mr-1">Size:</span>
        <span className="text-gray-800">{avgSize}</span>
      </div>
      <div className="mt-2 items-center">
        <Modal
          name={name}
          thumbnail={thumbnail}
          complexity={complexity}
          minPlayers={minPlayers}
          maxPlayers={maxPlayers}
          avgSize={avgSize}
        />
      </div>
    </div>
  );
};

export default BoardGame;
