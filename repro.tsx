import {
  JSONCrack,
  parseGraph,
  type JSONCrackProps
} from "jsoncrack-react";

parseGraph(123);

export const badProps: JSONCrackProps = "not-props";

export const el = (
  <JSONCrack
    json={{ a: 1 }}
    nonexistentProp="oops"
  />
);