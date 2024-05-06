import { parser } from "./utils/parser";
import { tokenizer } from "./utils/tokenizer";

console.log(
  parser(
    tokenizer(`{
    "name": "Uttkarsh",
    "isStudent": false,
    "anArray": [],
    "nullValue": null
}`)
  )
);
