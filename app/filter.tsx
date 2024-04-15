import React from "react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: {
    name: string;
    playersCount: string;
    size: string;
  }) => void;
}

const initialState = {
  name: "",
  playersCount: "",
  width: "",
  length: "",
};

export const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState(initialState.name);
  const [playersCount, setPlayersCount] = useState(initialState.playersCount); // Store the number of players
  const [width, setWidth] = useState(initialState.width); // For width in inches
  const [length, setLength] = useState(initialState.length); // For length in inches

  const handleSavePreferences = () => {
    const size = `${width}in x ${length}in`;
    onFilterChange({
      name,
      playersCount,
      size: width && length ? size : "",
    });
  };

  const resetFilters = () => {
    setName(initialState.name);
    setPlayersCount(initialState.playersCount);
    setWidth(initialState.width);
    setLength(initialState.length);

    onFilterChange({
      ...initialState,
      size: "",
    });
  };

  return (
    <div className="relative">
      <div className="filter-buttons-positioning absolute inset-y-30 right-4 w-96">
        <div className="space-y-4 w-full max-w-2xl ">
          <input
            type="text"
            placeholder="Game name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black py-3 px-4 text-lg"
          />
          <input
            type="number"
            placeholder="Number of players"
            value={playersCount}
            onChange={(e) => setPlayersCount(e.target.value)}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black py-3 px-4 text-lg"
          />
          <div className="flex justify-between space-x-4">
            <input
              type="number"
              placeholder="Width (in)"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black py-3 px-4 text-lg"
            />

            <input
              type="number"
              placeholder="Length (in)"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black py-3 px-4 text-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button
              onClick={handleSavePreferences}
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-black py-3 px-4 text-lg"
            >
              Save Preferences
            </button>{" "}
            <button
              onClick={resetFilters}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-black py-3 px-6 text-lg"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
