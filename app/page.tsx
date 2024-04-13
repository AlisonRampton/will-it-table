"use client";

import Header from "./header";
import { marcellus, philosopher, abz, concert } from "./fonts";
import CardsColumns from "./cardsColumns";
import { boardGames } from "./boardGameData";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <Card quoteTxt="Hey a quote" source="me" tags={tags} />
    //   </div>
    // </main>
    <main className="flex flex-col items-center justify-between p-24">
      <Header bigMobile={true} />
      {/* Explore items */}
      <div className="pt-12 pb-12">
        <h1 className={`${abz.className} text-center text-4xl pb-8`}>
          Tabletop games should fit on your table.
        </h1>
        <p className={`${abz.className}`}>Find the ones that can.</p>
      </div>
      <CardsColumns boardGames={boardGames} />
    </main>
  );
}
