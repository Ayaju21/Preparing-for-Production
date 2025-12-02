import { expect } from "chai";
import shuffle from "../src/scripts/Shuffle.js";

describe("shuffle()", () => {
  it("should return a new array with the same length", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle(arr);

    expect(result.length).to.equal(arr.length);
  });

  it("should rearrange the indexes (order should differ sometimes)", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = shuffle(arr);

    // shuffle may return same order by chance but extremely rare with assertion below
    expect(result.join("")).not.to.equal(arr.join(""));
  });

  // unhappy path
  it("should return an empty array if input is not an array", () => {
    const result = shuffle(null);
    expect(result).to.deep.equal([]);
  });
});
