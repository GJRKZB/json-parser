import { Token, ASTNode } from "../types";

export const parser = (tokens: Token[]) => {
  if (!tokens.length) {
    throw new Error("Nothing ot parse. Exiting !");
  }

  let current = 0;
  function advance() {
    return tokens[++current];
  }

  function parseValue(): ASTNode {
    const token = tokens[current];
    switch (token.type) {
      case "String":
        return { type: "String", value: token.value };
      case "Number":
        return { type: "Number", value: Number(token.value) };
      case "True":
        return { type: "Boolean", value: true };
      case "False":
        return { type: "Boolean", value: false };
      case "Null":
        return { type: "Null" };
      case "BraceOpen":
        return parseObject();
      case "BracketOpen":
        return parseArray();
      default:
        throw new Error(`Unexpected token type: ${token.type}`);
    }
  }

  function parseObject(): ASTNode {
    const node: ASTNode = { type: "Object", value: {} };
    let token = advance();

    while (token.type !== "BraceClose") {
      if (token.type === "String") {
        const key = token.value;
        token = advance();
        if (token.type !== "Colon")
          throw new Error("Extected : in key-value pair");
        token = advance();
        // value can be of type ASTNode
        const value = parseValue();
        node.value[key] = value;
      } else {
        throw new Error(
          `Expected String key in object. Token type: ${token.type}`
        );
      }
      token = advance(); // Consuming ,
      if (token.type === "Comma") token = advance();
    }
    return node;
  }

  function parseArray(): ASTNode {
    const node: ASTNode = { type: "Array", value: [] };
    let token = advance(); // Eat '['
    while (token.type !== "BracketClose") {
      const value = parseValue();
      node.value.push(value);

      token = advance(); // Eat ","
      if (token.type === "Comma") token = advance();
    }
    return node;
  }

  // consuming the tokens
  const builtAST = parseValue();
  return builtAST;
};
