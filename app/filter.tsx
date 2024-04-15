import React from "react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: {
    name: string;
    minPlayers: string;
    maxPlayers: string;
    size: string;
  }) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(8);
  const [width, setWidth] = useState(""); // For width in inches
  const [length, setLength] = useState(""); // For length in inches

  const handleFilterChange = () => {
    const size = `${width}in x ${length}in`;
    onFilterChange({
      name,
      minPlayers: minPlayers.toString(),
      maxPlayers: maxPlayers === 8 ? "8+" : maxPlayers.toString(),
      size: width && length ? size : "",
    });
    console.log(`MinPlayers: ${minPlayers}, MaxPlayers: ${maxPlayers}`);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder={name ? name : "Game name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          handleFilterChange();
        }}
        //onBlur={handleFilterChange}
      />
      <div>
        Min Players: {minPlayers}
        <input
          type="range"
          min="1"
          max="8"
          value={minPlayers}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setMinPlayers(Number(target.value));
            handleFilterChange();
            console.log(`in the return: minPlayers: ${minPlayers}`);
          }}
        />
      </div>
      <div>
        Max Players: {maxPlayers === 8 ? "8+" : maxPlayers}
        <input
          type="range"
          min="1"
          max="8"
          value={maxPlayers}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setMaxPlayers(Number(target.value));
            handleFilterChange();
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>
          Width (in):
          <input
            type="number"
            placeholder="Width"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value || "");
              handleFilterChange();
            }}
          />{" "}
          in
        </label>
        <label style={{ marginLeft: "10px" }}>
          Length (in):
          <input
            type="number"
            placeholder="Length"
            value={length}
            onChange={(e) => {
              setLength(e.target.value || "");
              handleFilterChange();
            }}
          />{" "}
          in
        </label>
      </div>
    </div>
  );
};
