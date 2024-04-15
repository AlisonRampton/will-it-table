// BoardGameCard.tsx
import React from "react";
import { BoardGame } from "./types"; // Adjust the import path as necessary

interface BoardGameCardProps {
  name: string;
  yearPublished?: string; // Make yearPublished optional
  averageRating: string;
  //game: BoardGame;
}

//const BoardGameCard: React.FC<BoardGameCardProps> = ({ game }): JSX.Element => {
const BoardGameCard: React.FC<BoardGameCardProps> = ({
  name,
  yearPublished,
  averageRating,
}): JSX.Element => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "10px",
        maxWidth: "300px",
      }}
    >
      <h2>
        {name} {yearPublished} {averageRating}
      </h2>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default BoardGameCard;
