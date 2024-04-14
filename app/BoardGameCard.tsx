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
      {/* <h2>
        {game.name} ({game.yearpublished})
      </h2>
      <div>
        <strong>Rank:</strong> {game.rank}
      </div>
      <div>
        <strong>Average Rating:</strong> {game.average}
      </div>
      <div>
        <strong>Bayes Average:</strong> {game.bayesaverage}
      </div>
      <div>
        <strong>Number of Ratings:</strong> {game.usersrated}
      </div> */}
      {/* Add more fields as necessary */}
    </div>
  );
};

// const BoardGameCard: React.FC<BoardGameCardProps> = ({ game }) => {
//   return <div>Test</div>;
// };

export default BoardGameCard;
