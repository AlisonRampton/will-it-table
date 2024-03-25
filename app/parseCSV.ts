import * as fs from "fs";
import { BoardGame } from "./types";

function parseCSV(filePath: string): Record<string, BoardGame> {
  try {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const lines = fileContent.split("\n");
    const headers = lines[0].split(",");
    const result: Record<string, BoardGame> = {};

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      if (values.length === headers.length) {
        const entry: BoardGame = values.reduce((obj, value, index) => {
          obj[headers[index] as keyof BoardGame] = value;
          return obj;
        }, {} as BoardGame);

        if (entry.name) {
          result[entry.name] = entry;
        }
      }
    }

    return result;
  } catch (error) {
    console.error("Error reading or parsing the CSV file:", error);
    return {};
  }
}

const boardGames = parseCSV("path/to/boardgame_ranks.csv");
// Get the keys of the boardGames object
const keys = Object.keys(boardGames);

// Print the first 5 entries
for (let i = 0; i < Math.min(5, keys.length); i++) {
  const key = keys[i];
  console.log(boardGames[key]);
}
