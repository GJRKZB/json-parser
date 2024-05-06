import { Token } from "../types";
import { isBooleanFalse, isBooleanTrue, isNull, isNumber } from "./utils";

export const tokenizer = (input: string): Token[] => {
  let current = 0;
  let tokens: Token[] = [];

  while (current < input.length) {
    let char = input[current];

    if (char === "{") {
      tokens.push({
        type: "BraceOpen",
        value: char,
      });
      current++;
    }
    if (char === "}") {
      tokens.push({
        type: "BraceClose",
        value: char,
      });
      current++;
    }
    if (char === "[") {
      tokens.push({
        type: "BracketOpen",
        value: char,
      });
      current++;
    }
    if (char === "]") {
      tokens.push({
        type: "BracketClose",
        value: char,
      });
      current++;
    }
    if (char === ":") {
      tokens.push({
        type: "Colon",
        value: char,
      });
      current++;
    }

    if (char === ",") {
      tokens.push({
        type: "Comma",
        value: char,
      });
      current++;
    }

    if (char === '"') {
      let value = "";
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: "String",
        value,
      });
      current++;
    }

    if (/[\d\w]/.test(char)) {
      let value = "";
      while (/[\d\w]/.test(char)) {
        value += char;
        char = input[++current];
      }

      if (isNumber(value)) tokens.push({ type: "Number", value });
      else if (isBooleanTrue(value)) tokens.push({ type: "True", value });
      else if (isBooleanFalse(value)) tokens.push({ type: "False", value });
      else if (isNull(value)) tokens.push({ type: "Null", value });
      else throw new Error("Unexpected value: " + value);

      continue;
    }

    if (/\s/.test(char)) {
      current++;
      continue;
    }

    throw new Error("Unexpected character: " + char);
  }
  return tokens;
};
