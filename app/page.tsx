"use client";

import Header from "./header";
import { marcellus, philosopher, abz, concert } from "./fonts";
import CardsColumns from "./cardsColumns";
import { boardGames } from "./boardGameData";
import { useState } from "react";
import { Filter } from "./filter";

export default function Home() {
  const [filteredGames, setFilteredGames] = useState(boardGames);

  const handleFilterChange = (filter: {
    name: string;
    playersCount: string;
    size: string;
  }) => {
    const filtered = boardGames.filter((game) => {
      const numPlayers = parseInt(filter.playersCount);
      const [filterWidth, filterLength] = filter.size
        .split(" x ")
        .map((dim) => parseInt(dim));

      // Parse width and length from each game's avgSize
      const [gameWidth, gameLength] = game.avgSize
        .replace(/in/g, "")
        .split(" x ")
        .map(Number);

      const fitsWidthLength =
        gameWidth <= filterWidth && gameLength <= filterLength;
      const fitsLengthWidth =
        gameWidth <= filterLength && gameLength <= filterWidth;

      return (
        (filter.name
          ? game.name.toLowerCase().includes(filter.name.toLowerCase())
          : true) &&
        (!filter.playersCount ||
          (numPlayers >= game.minPlayers && numPlayers <= game.maxPlayers)) &&
        (isNaN(filterWidth) ||
          isNaN(filterLength) ||
          fitsWidthLength ||
          fitsLengthWidth) // Check both dimension arrangements
      );
    });
    setFilteredGames(filtered);
  };
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <Card quoteTxt="Hey a quote" source="me" tags={tags} />
    //   </div>
    // </main>
    <main className="flex flex-col items-center justify-between p-24">
      <Header bigMobile={true} />
      {/* Explore items */}
      <div className="filter-positioning">
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className="pt-12 pb-12">
        <h1 className={`${abz.className} text-center text-4xl pb-8`}>
          Tabletop games should fit on your table.
        </h1>
        <p className={`${abz.className}`}>Find the ones that can.</p>
      </div>
      <CardsColumns boardGames={filteredGames} /* boardGames */ />
    </main>
  );
}
