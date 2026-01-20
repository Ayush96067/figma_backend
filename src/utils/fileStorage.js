import fs from "fs";
import path from "path";

export const readJSON = (fileName) => {
  const filePath = path.resolve("src/data", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeJSON = (fileName, data) => {
  const filePath = path.resolve("src/data", fileName);
  fs.writeFileSync(filePath, JSON.stringify(data));
};
