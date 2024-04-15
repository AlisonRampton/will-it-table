import React from "react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: {
    name: string;
    playersCount: string;
    size: string;
  }) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [playersCount, setPlayersCount] = useState(""); // Store the number of players
  const [width, setWidth] = useState(""); // For width in inches
  const [length, setLength] = useState(""); // For length in inches

  const handleSavePreferences = () => {
    const size = `${width}in x ${length}in`;
    onFilterChange({
      name,
      playersCount,
      size,
    });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder={name ? name : "Game name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        How many players do you have?
        <input
          type="number"
          placeholder="Number of players"
          value={playersCount}
          onChange={(e) => setPlayersCount(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>
          Width (in):
          <input
            type="number"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />{" "}
          in
        </label>
        <label style={{ marginLeft: "10px" }}>
          Length (in):
          <input
            type="number"
            placeholder="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />{" "}
          in
        </label>
        <button onClick={handleSavePreferences} disabled={!width || !length}>
          Save Preferences
        </button>
      </div>
    </div>
  );
};
